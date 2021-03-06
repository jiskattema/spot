/**
 * @classdesc Radar Chart class
 * @class RadarChart
 * @augments BaseChart
 */

var BaseChart = require('./base-chart');

module.exports = BaseChart.extend({
  initialize: function () {
    this.slots.reset([
      {
        description: 'Group by',
        type: 'partition',
        rank: 1,
        required: true,
        supportedFacets: ['categorial', 'datetime', 'duration', 'continuous', 'text']
      }
    ]);
  },
  chartjsConfig: function () {
    return {
      type: 'radar',
      data: {
        datasets: [],
        labels: []
      },
      options: {
        title: {
          display: true,
          position: 'top'
        },
        tooltips: {
        }
      }
    };
  }
});
