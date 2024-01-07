import Logos from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Logos',
    component: Logos,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        organization: {
            options: [
                Logos.organizations.MSC,
                Logos.organizations.HAPAG_LLOYD,
                Logos.organizations.COSCO,
                Logos.organizations.ZIM,
                Logos.organizations.OOCL,
                Logos.organizations.ONE,
                Logos.organizations.MAERSK,
                Logos.organizations.EVERGREEN,
                Logos.organizations.CMA_CGM,
            ],
            control: {
                type: 'radio',
                labels: {
                    [Logos.organizations.MSC]: 'Logos.organizations.MSC',
                    [Logos.organizations.HAPAG_LLOYD]: 'Logos.organizations.HAPAG_LLOYD',
                    [Logos.organizations.COSCO]: 'Logos.organizations.COSCO',
                    [Logos.organizations.ZIM]: 'Logos.organizations.ZIM',
                    [Logos.organizations.OOCL]: 'Logos.organizations.OOCL',
                    [Logos.organizations.ONE]: 'Logos.organizations.ONE',
                    [Logos.organizations.MAERSK]: 'Logos.organizations.MAERSK',
                    [Logos.organizations.EVERGREEN]: 'Logos.organizations.EVERGREEN',
                    [Logos.organizations.CMA_CGM]: 'Logos.organizations._CGM',
                }
            }
        },
        size: {
            options: [
                Logos.size.MINI,
                Logos.size.NORMAL,
                Logos.size.LARGE
            ],
            control: {
                type: 'radio',
                labels: {
                    [Logos.size.MINI]: 'Logos.size.MINI',
                    [Logos.size.NORMAL]: 'Logos.size.NORMAL',
                    [Logos.size.LARGE]: 'Logos.size.LARGE',
                }
            }
        }
    }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    size: Logos.size.MINI,
    organization: 'MSC',
  },
};
