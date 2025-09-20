import { ClickerModel } from "./clicker_model";
import { registry } from "@web/core/registry";

const clickerService = {
    start(env) {
        return new ClickerModel();
    },
};

registry.category("services").add("awesome_clicker.clicker", clickerService);