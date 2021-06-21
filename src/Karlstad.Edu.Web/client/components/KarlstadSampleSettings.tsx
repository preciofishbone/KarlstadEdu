import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { KarlstadSampleSettingsStyles } from './KarlstadSampleSettings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface KarlstadSampleBlockSettings{
    title: string;
}

export const BlockConfigurationFactory = {
    defaultSettings(): KarlstadSampleBlockSettings {
        return {
            title: "my block title"
        }
    }
}


@Component
export default class KarlstadSampleSettings extends VueComponentBase implements IWebComponentInstance {
    
    private KarlstadSampleSettingsClasses = StyleFlow.use(KarlstadSampleSettingsStyles);
    
    @BlockSettingsWriter<KarlstadSampleBlockSettings>({
        defaultValue: BlockConfigurationFactory.defaultSettings()
    })
    protected settings: IBlockSettingsWriter<KarlstadSampleBlockSettings>;

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
    vueCustomElement(manifest.elementName, KarlstadSampleSettings);
});