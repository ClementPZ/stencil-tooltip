import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "my-tooltip",
    styleUrl: "./my-tooltip.css",
    shadow: true
})

export class MyToolip {

    @Prop( { } ) tooltiptext: string = "should add a tooltipText attribute to custom element my-tooltip";

    render() {
        return (
        <div id="container">
            <main>
                <slot />
                <span id="tooltip-icon"> ?</span>
            </main>
            <div id="tooltip">
                {this.tooltiptext}
            </div>
        </div> 
        )
    }
}