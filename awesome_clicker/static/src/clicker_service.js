import { ClickerModel } from "./clicker_model";
import { registry } from "@web/core/registry";

const clickerService = {
    dependencies: ["effect"],

    start(env, services) {
        const clickerModel = new ClickerModel();
        const bus = clickerModel.bus;
        bus.addEventListener("MILESTONE_1k", () => {
            services.effect.add({
                message: "Milestone reached! You can now buy clickbots",
                type: "rainbow_man",
            });
        });
        return clickerModel;
    },
};

registry.category("services").add("awesome_clicker.clicker", clickerService);