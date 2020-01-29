import { Component, h } from "@stencil/core";

@Component({
    tag: "my-tooltip",
    styleUrl: "./my-tooltip.css",
    shadow: true
})

export class MyToolip {
    render() {
        return (
        <main>
            <slot />
            <span id="tooltip-span"> ?</span>
        </main>
        )
    }
}