import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { SolveigViewerSettingsStyles } from './SolveigViewerSettings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface SolveigViewerBlockSettings{
    title: string;
}

@Component
export default class SolveigViewerSettings extends VueComponentBase implements IWebComponentInstance {
    
    private SolveigViewerSettingsClasses = StyleFlow.use(SolveigViewerSettingsStyles);
    
    @BlockSettingsWriter<SolveigViewerBlockSettings>({
        defaultValue: { title: 'my block title'}
    })
    protected settings: IBlockSettingsWriter<SolveigViewerBlockSettings>;

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
    vueCustomElement(manifest.elementName, SolveigViewerSettings);
});