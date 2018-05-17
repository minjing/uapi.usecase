package org.inactionware.fundsflow.action;

import uapi.behavior.ActionIdentify;
import uapi.behavior.annotation.Action;
import uapi.behavior.annotation.ActionDo;
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

    @Inject
    protected IRegistry _registry;

//    @Inject
//    protected INetListenerRegistry _registry;

    @ActionDo
    public void run(Object input) {
        Map<String, Object> attrs = new HashMap<>();
        attrs.put(HttpAttributes.HOST, "127.0.0.1");
        attrs.put(HttpAttributes.PORT, 8000);
        attrs.put(HttpAttributes.EVENT_SOURCE, "APIServer");
        IHttpListener httpListener = this._registry.findService(IHttpListener.class, attrs);
        httpListener.startUp();

//        INetListenerInitializer listenerInit = this._registry.getInitializer(HttpAttributes.TYPE);
//        listenerInit.setAttribute(HttpAttributes.HOST, "127.0.0.1");
//        listenerInit.setAttribute(HttpAttributes.PORT, 8000);
//        INetListener httpListener = listenerInit.newListener();
//        httpListener.startUp();
    }
}
