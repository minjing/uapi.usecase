package org.inactionware.fundsflow;

import org.inactionware.fundsflow.action.ListenHttpPort;
import uapi.app.AppStartupEvent;
import uapi.behavior.IResponsible;
import uapi.behavior.IResponsibleRegistry;
import uapi.log.ILogger;
import uapi.service.IRegistry;
import uapi.service.annotation.Inject;
import uapi.service.annotation.OnActivate;
import uapi.service.annotation.Service;

@Service(autoActive = true)
public class ApiServer {

    @Inject
    protected ILogger _logger;

    @Inject
    protected IResponsibleRegistry _respReg;

    @Inject
    protected IRegistry _reg;

    @OnActivate
    public void activate() {
        IResponsible server = this._respReg.register("API Server");
        server.newBehavior("Listen HTTP port", AppStartupEvent.class, AppStartupEvent.TOPIC)
                .then(ListenHttpPort.actionId)
                .then((input, ctx) -> { this._logger.info("Listen HTTP port success."); return input; })
                .build();
//        server.newBehavior("Shut down HTTP port", AppShutdownEvent.class, AppShutdownEvent.TOPIC)
//                .then()
    }
}
