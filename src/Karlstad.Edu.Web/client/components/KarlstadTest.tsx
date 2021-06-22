import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { KarlstadTestStyles } from './KarlstadTest.css';
import { KarlstadTestBlockSettings } from './KarlstadTestSettings';

@Component
export default class KarlstadTest extends VueComponentBase implements IWebComponentInstance {
    

    private KarlstadTestClasses = StyleFlow.use(KarlstadTestStyles);

    @BlockSettingsReader<KarlstadTestBlockSettings>({
        defaultValue: { title: 'Hello Karlstad',description:'default beskrivning'},
        editElement: "kstad-omnia-test-settings"
    })
    protected settings: KarlstadTestBlockSettings;
    private sliderValue:number = 25;
    private dialogModel = false;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }




    render(h) {
        return (
            <v-row>
                <v-col cols="6" >
                    <v-card>
                        <v-card-title>          
                            <v-text-field
                        filled
                        v-model={this.settings.title}
                        label='Title'></v-text-field>
                        </v-card-title>
                        <v-card-text>text
                        <v-slider
                            hint="Im a hint"
                            max="50"
                            v-model={this.sliderValue}
                            min="-50"
                            ></v-slider>                            
                        </v-card-text>
                        SliderValue är {this.sliderValue}
                    </v-card>
                </v-col>
                <v-col cols="4" >
                <v-btn
                    text="ClickMe"
                    onClick={()=>this.dialogModel = true}
                >
                    clickme
                </v-btn>
                </v-col>
                <v-col cols="2" >
                <v-dialog
                    v-model={this.dialogModel}
                    width="500"
                    >
                        dialogtext
                        </v-dialog>
                </v-col>
            </v-row>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, KarlstadTest);
});