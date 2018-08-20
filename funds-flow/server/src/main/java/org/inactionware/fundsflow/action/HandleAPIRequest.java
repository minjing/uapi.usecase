package org.inactionware.fundsflow.action;

import uapi.behavior.ActionIdentify;
import uapi.behavior.annotation.Action;
import uapi.behavior.annotation.ActionDo;
import uapi.net.http.HttpEvent;
import uapi.protocol.ResourceProcessing;
import uapi.service.annotation.Service;

@Service
@Action
public class HandleAPIRequest {

    public static final ActionIdentify actionId = ActionIdentify.toActionId(HandleAPIRequest.class);

    @ActionDo
    public ResourceProcessing decode(ResourceProcessing processing) {
        return processing;
    }
}
