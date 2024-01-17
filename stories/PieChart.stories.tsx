import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export,
    PieChartTypes,
} from 'devextreme-react/pie-chart';
import { areas } from '../demos/pie-chart/data';

const meta: Meta<typeof PieChart> = {
    title: 'Example/Pie Chart',
    component: PieChart,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        dataSource: {
            control: {
                type: 'object'
            }
        }
    }
};

export default meta;

function pointClickHandler(e: PieChartTypes.PointClickEvent) {
    toggleVisibility(e.target);
}

function legendClickHandler(e: PieChartTypes.LegendClickEvent) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
    toggleVisibility(item);
}

function toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
}

export const Overview: React.FC = () => {
    return (
        <PieChart
            id="pie"
            dataSource={areas}
            palette="Bright"
            title="Area of Countries"
            onPointClick={pointClickHandler}
            onLegendClick={legendClickHandler}
        >
            <Series argumentField="country" valueField="area">
                <Label visible={true}>
                    <Connector visible={true} width={1}/>
                </Label>
            </Series>

            <Size width={500}/>
            <Export enabled={true}/>
        </PieChart>
    );
}