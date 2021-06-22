import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { GraphExampleSettingsStyles } from './GraphExampleSettings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface GraphExampleBlockSettings{
    title: string;
}

@Component
export default class GraphExampleSettings extends VueComponentBase implements IWebComponentInstance {
    
    private GraphExampleSettingsClasses = StyleFlow.use(GraphExampleSettingsStyles);
    
    @BlockSettingsWriter<GraphExampleBlockSettings>({
        defaultValue: { title: 'my block title'}
    })
    protected settings: IBlockSettingsWriter<GraphExampleBlockSettings>;

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={this.settings.title}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, GraphExampleSettings);
});