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

    @Inject
    protected IRegistry _registry;

    @ActionDo
    public IHttpListener listen(
            final String eventSrc,
            final String host,
            final Integer port
    ) {
        Map<String, Object> attrs = new HashMap<>();
        attrs.put(HttpAttributes.HOST, host);
        attrs.put(HttpAttributes.PORT, port);
        attrs.put(HttpAttributes.EVENT_SOURCE, eventSrc);
        return this._registry.findService(IHttpListener.class, attrs);
    }
}
