import uapi.IModulePortal;
import org.inactionware.fundsflow.FundsflowModulePortal;

module fundsflow {
    requires static uapi.codegen;
    requires static uapi.service.apt;
    requires static uapi.config.apt;
    requires static uapi.behavior.apt;
    requires static uapi.net.apt;

    requires uapi.common;
    requires uapi.exception;
    requires uapi.service;
    requires uapi.config;
    requires uapi.command;
    requires uapi.event;
    requires uapi.behavior;
    requires uapi.log;
    requires uapi.net;
    requires uapi.net.http;
    requires uapi.protocol;
    requires uapi.app;
    requires uapi.app.terminal;
    requires jdk.unsupported;

    provides IModulePortal with FundsflowModulePortal;

    exports fundsflow.generated to uapi.service;
}