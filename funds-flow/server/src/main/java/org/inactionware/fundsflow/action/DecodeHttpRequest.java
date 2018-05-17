package org.inactionware.fundsflow.action;

import uapi.behavior.ActionIdentify;
import uapi.behavior.annotation.Action;
import uapi.behavior.annotation.ActionDo;
import uapi.net.http.HttpEvent;
import uapi.service.annotation.Service;

@Service
@Action
public class DecodeHttpRequest {

    public static final ActionIdentify actionId = ActionIdentify.toActionId(DecodeHttpRequest.class);

    @ActionDo
    public void decode(HttpEvent event) {
        return;
    }
}
