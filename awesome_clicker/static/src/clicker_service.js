import { reactive } from "@odoo/owl";
import { registry } from "@web/core/registry";

const clickerService = {
    start(env) {
        const state = reactive({ clicks: 0 });

        function increment(inc) {
            state.clicks += inc;
        }

        document.addEventListener("click", () => increment(1), true);

        return {
            state,
            increment,
        };
    },
};

registry.category("services").add("awesome_clicker.clicker", clickerService);