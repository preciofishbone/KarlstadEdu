import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { KarlstadTestSettingsStyles } from './KarlstadTestSettings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface KarlstadTestBlockSettings{
    title: string;
    description:string;
}

@Component
export default class KarlstadTestSettings extends VueComponentBase implements IWebComponentInstance {
    
    private KarlstadTestSettingsClasses = StyleFlow.use(KarlstadTestSettingsStyles);
    
    @BlockSettingsWriter<KarlstadTestBlockSettings>({
        defaultValue: { title: 'my block title',description:'description sample'}
    })
    protected settings: IBlockSettingsWriter<KarlstadTestBlockSettings>;

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
                    <v-text-field
                        filled
                        v-model={this.settings.description}
                        label='Beskrivning'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, KarlstadTestSettings);
});