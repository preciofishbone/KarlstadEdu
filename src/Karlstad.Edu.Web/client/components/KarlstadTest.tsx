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

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.KarlstadTestClasses.container}>
                {this.settings.title}
                {this.settings.description}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, KarlstadTest);
});