// src/components/ZuiInput/ZuiInput.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';
import ZuiInput from './ZuiInput.vue';

export default {
  title: 'Components/ZuiInput',
  component: ZuiInput,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the input field.'
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the input field.'
    },
    inputId: {
      control: 'text',
      description: 'The ID for the input element.'
    },
    modelValue: {
      control: 'text',
      description: 'The value of the input field.'
    },
    size: {
      control: { type: 'select', options: ['small', 'large'] },
      description: 'The size of the input field.'
    },
    invalid: {
      control: 'boolean',
      description: 'Indicates if the input field is in an invalid state.'
    },
    fluid: {
      control: 'boolean',
      description: 'If true, the input field will take the full width of its container.'
    },
    floatLabel: {
      control: 'boolean',
      description: 'If true, the label will float above the input field.'
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<ZuiInput v-bind="args" />`,
        language: 'vue',
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { ZuiInput },
  setup() {
    return { args };
  },
  template: `<ZuiInput v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Label',
  placeholder: 'Enter text...',
  inputId: 'default-input',
  size: undefined,
  invalid: false,
  fluid: false,
  floatLabel: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Custom Label',
};
WithLabel.parameters = {
    docs: {
        source: {
          code: `<ZuiInput label="Custom Label" />`,
        }
    }
}

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Custom Placeholder',
};

export const WithInputId = Template.bind({});
WithInputId.args = {
  inputId: 'custom-input-id',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: 'large',
};

export const InvalidState = Template.bind({});
InvalidState.args = {
  invalid: true,
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
};
