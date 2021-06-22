import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper,Inject } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { GraphExampleStyles } from './GraphExample.css';
import { GraphExampleBlockSettings } from './GraphExampleSettings';
import { AzureAdInternalUserTypeObject } from '@omnia/fx/models';
import { GraphService } from '../service/graphservice';

@Component
export default class GraphExample extends VueComponentBase implements IWebComponentInstance {
    
    @Inject(GraphService) graphService : GraphService;
    private GraphExampleClasses = StyleFlow.use(GraphExampleStyles);

    private meString: string = "";

    @BlockSettingsReader<GraphExampleBlockSettings>({
        defaultValue: { title: 'my block title'},
        editElement: "krl-graph-example-settings"
    })
    protected settings: GraphExampleBlockSettings;

    async mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
        this.meString = await this.graphService.getMe();
    }

    render(h) {
        return (
            <div class={this.GraphExampleClasses.container}>
                {this.meString}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, GraphExample);
});