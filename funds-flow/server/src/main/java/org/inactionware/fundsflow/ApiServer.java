package org.inactionware.fundsflow;

import org.inactionware.fundsflow.action.HandleAPIRequest;
import org.inactionware.fundsflow.action.GetHttpListener;
import uapi.app.AppShutdownEvent;
import uapi.app.AppStartupEvent;
import uapi.behavior.IResponsible;
import uapi.behavior.IResponsibleRegistry;
import uapi.config.annotation.Config;
import uapi.log.ILogger;
import uapi.net.http.HttpEvent;
import uapi.net.http.IHttpListener;
import uapi.protocol.*;
import uapi.service.IRegistry;
import uapi.service.annotation.Inject;
import uapi.service.annotation.OnActivate;
import uapi.service.annotation.Service;

import java.util.Optional;

@Service(autoActive = true)
public class ApiServer {

    private static final String name = "API Server";

    @Inject
    protected IRegistry _reg;

    @Inject
    protected ILogger _logger;

    @Inject
    protected IResponsibleRegistry _respReg;

    @Config(path="server.host")
    protected String _host;

    @Config(path="server.port")
    protected Integer _port;

    private IHttpListener _httpListener;

    @OnActivate
    public void activate() {
        IResponsible server = this._respReg.register(name);
        server.newBehavior("API Server HTTP Listening", AppStartupEvent.class, AppStartupEvent.TOPIC)
                .then(GetHttpListener.actionId, "GetHttpListener", name, this._host, this._port)
                .call(ctx -> {
                    this._httpListener = ctx.lastActionOutput();
                    this._httpListener.startUp();
                })
                .onSuccess((success, ctx) -> { this._logger.info("API Server HTTP listening success."); return null; })
                .onFailure((failure, ctx) -> { this._logger.error(failure.message(), failure.cause()); return null; })
                .build();
        server.newBehavior("API Server HTTP Shutdown", AppShutdownEvent.class, AppShutdownEvent.TOPIC)
                .call(ctx -> this._httpListener.shutDown())
                .onSuccess((success, ctx) -> { this._logger.info("API Server HTTP listening shutdown"); return null; })
                .onFailure((failure, ctx) -> { this._logger.error(failure.message(), failure.cause()); return null; })
                .build();
        server.newBehavior("Handle HTTP request", HttpEvent.class, HttpEvent.TOPIC)
                .then(InitProcessing.actionId)
                .then(DecodeProtocol.actionId)
                .then(HandleAPIRequest.actionId)
                .then(EncodeProtocol.actionId)
                .then(EndProcessing.actionId)
//                .onFailure(ErrorProcessing.actionId)
                .build();
    }
}
