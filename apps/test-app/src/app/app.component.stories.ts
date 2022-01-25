import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
}

export const WithCodeProps = Template.bind({});
WithCodeProps.args = {
  exampleProp: 'This is a storybook injected prop - you can edit this live in Storybook!'
}
