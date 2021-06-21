import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { KarlstadSampleStyles } from './KarlstadSample.css';
import { BlockConfigurationFactory, KarlstadSampleBlockSettings } from './KarlstadSampleSettings';

@Component
export default class KarlstadSample extends VueComponentBase implements IWebComponentInstance {
    

    private KarlstadSampleClasses = StyleFlow.use(KarlstadSampleStyles);

    @BlockSettingsReader<KarlstadSampleBlockSettings>({
        defaultValue: BlockConfigurationFactory.defaultSettings(),
        editElement: "kstad-omnia-sample-settings"
    })
    protected settings: KarlstadSampleBlockSettings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.KarlstadSampleClasses.container}>
                {this.settings.title}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, KarlstadSample);
});