package org.inactionware.fundsflow.action;

import uapi.behavior.ActionIdentify;
import uapi.behavior.annotation.Action;
import uapi.behavior.annotation.ActionDo;
import uapi.net.INetListener;
import uapi.net.INetListenerInitializer;
import uapi.net.INetListenerRegistry;
import uapi.net.http.HttpAttributes;
import uapi.service.annotation.Inject;
import uapi.service.annotation.Service;

@Service
@Action
public class ListenHttpPort {

    public static final ActionIdentify actionId = ActionIdentify.toActionId(ListenHttpPort.class);

    @Inject
    protected INetListenerRegistry _registry;

    @ActionDo
    public void run(Object input) {
        INetListenerInitializer listenerInit = this._registry.getInitializer(HttpAttributes.TYPE);
        listenerInit.setAttribute(HttpAttributes.HOST, "127.0.0.1");
        listenerInit.setAttribute(HttpAttributes.PORT, 8000);
        INetListener httpListener = listenerInit.newListener();
        httpListener.startUp();
    }
}
