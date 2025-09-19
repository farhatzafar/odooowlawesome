import { Component, useState, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class ClickerSystray extends Component {

    static template = "awesome_clicker.ClickerSystray";

    static props = {};

    setup() {
        this.state = useState({ counter: 0 });
        useExternalListener(document.body, "click", () => this.state.counter++, true);
    }

    increment() {
        this.state.counter+=9;
    }
}

export const systrayItem = {
    Component: ClickerSystray,
};

registry.category("systray").add("awesome_clicker.ClickerSystray", systrayItem, { sequence: 1000 });