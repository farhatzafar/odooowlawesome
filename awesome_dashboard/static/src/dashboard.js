/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

    static components = { Layout };

    setup() {
        this.display = {
            controlPanel: {},
        };
    }
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
