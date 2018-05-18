package org.inactionware.fundsflow.action;

import uapi.behavior.ActionIdentify;
import uapi.behavior.annotation.Action;
import uapi.behavior.annotation.ActionDo;
import uapi.config.annotation.Config;
import uapi.net.http.HttpAttributes;
import uapi.net.http.IHttpListener;
import uapi.service.IRegistry;
import uapi.service.annotation.Inject;
import uapi.service.annotation.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Action
public class ListenHttpPort {

    public static final ActionIdentify actionId = ActionIdentify.toActionId(ListenHttpPort.class);

    @Config(path="server.host")
    protected String _host;

    @Config(path="server.port")
    protected int _port;

    @Inject
    protected IRegistry _registry;

    @ActionDo
    public void run(Object input) {
        Map<String, Object> attrs = new HashMap<>();
        attrs.put(HttpAttributes.HOST, this._host);
        attrs.put(HttpAttributes.PORT, this._port);
        attrs.put(HttpAttributes.EVENT_SOURCE, "APIServer");
        IHttpListener httpListener = this._registry.findService(IHttpListener.class, attrs);
        httpListener.startUp();
    }
}
