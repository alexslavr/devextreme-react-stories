import React from 'react';
import type { Preview } from "@storybook/react";
import themes from "devextreme/ui/themes";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark', 'contrast', 'material.blue.light', 'fluent.saas.light', 'material.orange.light'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      return (
          <>
            <link rel="stylesheet" href={`css/dx.${ctx.globals.theme}.css`} />
            <Story />
          </>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};

export default preview;
