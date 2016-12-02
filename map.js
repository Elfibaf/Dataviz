'use strict';

/* global $ */
/* global Highcharts*/


var data_bar = [
    {
        id : "be",
        serie : [{
                    name : "Rest",
                    data : [8.42,9.05]
                }, {
                    name : "Work",
                    data : [3.07,1.53]
                }, {
                    name : "Household and family care",
                    data : [2.28,4.10]
                }, {
                    name : "Leisure and social life",
                    data : [5.58,5.06]
                }]
    }, {
        id : "bg",
        serie : [{
                    name : "Rest",
                    data : [9.18,9.15]
                }, {
                    name : "Work",
                    data : [3.32,2.34]
                }, {
                    name : "Household and family care",
                    data : [2.37,5.01]
                }, {
                    name : "Leisure and social life",
                    data : [4.46,3.47]
                }]
    }, {
        id : "ee",
        serie : [{
                    name : "Rest",
                    data : [8.45,8.43]
                }, {
                    name : "Work",
                    data : [4.27,3.05]
                }, {
                    name : "Household and family care",
                    data : [2.33,4.53]
                }, {
                    name : "Leisure and social life",
                    data : [5.02,4.18]
                }]
    }, {
        id : "fi",
        serie : [{
                    name : "Rest",
                    data : [8.46,8.52]
                }, {
                    name : "Work",
                    data : [3.48,2.33]
                }, {
                    name : "Household and family care",
                    data : [2.16,3.56]
                }, {
                    name : "Leisure and social life",
                    data : [5.56,5.17]
                }]
    }, {
        id : "fr",
        serie : [{
                    name : "Rest",
                    data : [8.51,9.01]
                }, {
                    name : "Work",
                    data : [3.48,2.17]
                }, {
                    name : "Household and family care",
                    data : [2.24,4.34]
                }, {
                    name : "Leisure and social life",
                    data : [4.44,4.05]
                }]
    }, {
        id : "de",
        serie : [{
                    name : "Rest",
                    data : [8.24,8.35]
                }, {
                    name : "Work",
                    data : [3.27,1.56]
                }, {
                    name : "Household and family care",
                    data : [2.22,4.14]
                }, {
                    name : "Leisure and social life",
                    data : [5.42,5.15]
                }]
    }, {
        id : "it",
        serie : [{
                    name : "Rest",
                    data : [8.49,8.50]
                }, {
                    name : "Work",
                    data : [4.15,1.52]
                }, {
                    name : "Household and family care",
                    data : [1.35,5.20]
                }, {
                    name : "Leisure and social life",
                    data : [5.05,4.06]
                }]
    }, {
        id : "lv",
        serie : [{
                    name : "Rest",
                    data : [8.58,9.04]
                }, {
                    name : "Work",
                    data : [5.00,3.29]
                }, {
                    name : "Household and family care",
                    data : [1.50,3.56]
                }, {
                    name : "Leisure and social life",
                    data : [4.45,4.08]
                }]
    }, {
        id : "lt",
        serie : [{
                    name : "Rest",
                    data : [8.43,8.48]
                }, {
                    name : "Work",
                    data : [4.45,3.31]
                }, {
                    name : "Household and family care",
                    data : [2.09,4.29]
                }, {
                    name : "Leisure and social life",
                    data : [4.47,3.45]
                }]
    }, {
        id : "no",
        serie : [{
                    name : "Rest",
                    data : [8.07,8.22]
                }, {
                    name : "Work",
                    data : [4.04,2.38]
                }, {
                    name : "Household and family care",
                    data : [2.21,3.47]
                }, {
                    name : "Leisure and social life",
                    data : [5.52,5.40]
                }]
    }, {
        id : "pl",
        serie : [{
                    name : "Rest",
                    data : [8.36,8.47]
                }, {
                    name : "Work",
                    data : [4.01,2.15]
                }, {
                    name : "Household and family care",
                    data : [2.22,4.45]
                }, {
                    name : "Leisure and social life",
                    data : [5.20,4.32]
                }]
    }, {
        id : "si",
        serie : [{
                    name : "Rest",
                    data : [8.56,8.55]
                }, {
                    name : "Work",
                    data : [3.53,2.42]
                }, {
                    name : "Household and family cares",
                    data : [2.38,4.56]
                }, {
                    name : "Leisure and social life",
                    data : [5.31,4.27]
                }]
    }, {
        id : "es",
        serie : [{
                    name : "Rest",
                    data : [9.00,8.58]
                }, {
                    name : "Work",
                    data : [4.21,2.06]
                }, {
                    name : "Household and family care",
                    data : [1.37,4.55]
                }, {
                    name : "Leisure and social life",
                    data : [5.16,4.26]
                }]
    }, {
        id : "gb",
        serie : [{
                    name : "Rest",
                    data : [8.35,8.50]
                }, {
                    name : "Work",
                    data : [4.10,2.24]
                }, {
                    name : "Household and family care",
                    data : [2.18,4.15]
                }, {
                    name : "Leisure and social life",
                    data : [5.22,4.55]
                }]
    }];
    
var countries = [['be',1],
                 ['bg',1],
                 ['ee',1],
                 ['fi',1],
                 ['fr',1],
                 ['de',1],
                 ['it',1],
                 ['lv',1],
                 ['lt',1],
                 ['no',1],
                 ['pl',1],
                 ['si',1],
                 ['es',1],
                 ['gb',1]];

var data_pie = [
    {
        id : 'be',
        data : [{name : "Rest", y: 8.53},{name:"Work", y:2.30},{name:'Household and family care', y:3.19},{name:'Leisure and social life', y:5.32}]
    }, {
        id : 'bg',
        data : [{name : "Rest", y: 9.16},{name:"Work", y:3.03},{name:'Household and family care', y:3.49},{name:'Leisure and social life', y:4.16}]
    }, {
        id : 'ee',
        data : [{name : "Rest", y: 8.44},{name:"Work", y:3.46},{name:'Household and family care', y:3.43},{name:'Leisure and social life', y:4.40}]
    }, {
        id : 'fi',
        data : [{name : "Rest", y: 8.49},{name:"Work", y:3.10},{name:'Household and family care', y:3.06},{name:'Leisure and social life', y:5.36}]
    }, {
        id : 'fr',
        data : [{name : "Rest", y: 8.56},{name:"Work", y:3.02},{name:'Household and family care', y:3.29},{name:'Leisure and social life', y:4.24}]
    }, {
        id : 'de',
        data : [{name : "Rest", y: 8.29},{name:"Work", y:2.41},{name:'Household and family care', y:3.18},{name:'Leisure and social life', y:5.28}]
    }, {
        id : 'it',
        data : [{name : "Rest", y: 8.49},{name:"Work", y:3.03},{name:'Household and family care', y:3.27},{name:'Leisure and social life', y:4.35}]
    }, {
        id : 'lv',
        data : [{name : "Rest", y: 9.01},{name:"Work", y:4.14},{name:'Household and family care', y:2.53},{name:'Leisure and social life', y:4.26}]
    }, {
        id : 'lt',
        data : [{name : "Rest", y: 8.45},{name:"Work", y:4.08},{name:'Household and family care', y:3.19},{name:'Leisure and social life', y:4.16}]
    }, {
        id : 'no',
        data : [{name : "Rest", y: 8.14},{name:"Work", y:3.21},{name:'Household and family care', y:3.04},{name:'Leisure and social life', y:5.46}]
    }, {
        id : 'pl',
        data : [{name : "Rest", y: 8.41},{name:"Work", y:3.08},{name:'Household and family care', y:3.33},{name:'Leisure and social life', y:4.56}]
    }, {
        id : 'si',
        data : [{name : "Rest", y: 8.55},{name:"Work", y:3.17},{name:'Household and family care', y:3.47},{name:'Leisure and social life', y:4.59}]
    }, {
        id : 'es',
        data : [{name : "Rest", y: 8.59},{name:"Work", y:3.13},{name:'Household and family care', y:3.16},{name:'Leisure and social life', y:4.51}]
    }, {
        id : 'gb',
        data : [{name : "Rest", y: 8.42},{name:"Work", y:3.17},{name:'Household and family care', y:3.16},{name:'Leisure and social life', y:5.08}]
    }];

function creerSeries(data_pie, data_map) {
    var res = [];
    var carte = {
            name: 'Country',
            mapData: Highcharts.maps['custom/europe'],
            data: data_map,
            color: '#8085e9',
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                formatter : function() {
                    return('');
                }
            },
            tooltip: {
              headerFormat: '',
              pointFormat: '{point.name}'
            }
        };
    res.push(carte);
    console.log(res);
    return res;
};
 
function creerPies(data_pie, map) {
    var res = []
    data_pie.forEach(function(elem) {
        var centre = map.series[0].points.forEach(function(p) {
           if (p['hc-key'] === elem.id) {
                res.push({
                    type: 'pie',
                    name: p.name+' : Time spent',
                    id: elem.id,
                    data: elem.data,
                    size: '5%',
                    dataLabels: {
                      enabled: false
                    },
                    center: [p.plotX-20,p.plotY-20]
                });
           }
        });
    });
    
    return res;
};


function creerBars(data_bar, point) {
    for(var i=0; i<data_bar.length; i = i+1){
        if ((data_bar[i].id === point["hc-key"]) || (data_bar[i].id === point.series.userOptions.id)){
            return (data_bar[i].serie);
        }
    }
}

function countryName(point) {
    if (point.shapeType === "arc") {
        return point.series.name.split(":")[0];
    }
    else {
        return point.name;
    }
}



            
$(function () {
    // Instanciate the map
        $('#container').highcharts('Map', {
        
        chart: {
            animation:false,
            borderWidth: 1
        },

        title: {
            text: 'Time used by countries'
        },
        legend: {
            enabled: false
        },
        plotOptions : {
			series : {
			    point : {
    			    events : { 
                		click : function(event){
                      	    $('#bar').highcharts({
                                chart: {
                                    type: 'column'
                                },
                                title: {
                                    text: 'Comparison of the time used by task between men and women in ' + countryName(event.point),
                                },
                                xAxis: {
                                    categories: ['Men','Women']
                                },
                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: 'Time spent'
                                    }
                                },
                                legend : {
                                    align: 'left',
                                    verticalAlign: 'top',
                                    layout: 'vertical',
                                    itemMarginTop: 10,
                                    itemMarginBottom: 10,
                                    x: 0,
                                    y: 150      
                                },
                                tooltip: {
                                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                                    shared: true
                                },
                                plotOptions: {
                                    column: {
                                        stacking: 'normal'
                                    },
                                    series : {
                                        events : {
                                            legendItemClick: function (event) {
                                                var color = this.color;
                                                var points = $("[fill="+color+"]");
                                                console.log(points);
                                                for (var i = 0; i<points.length; i=i+1) {
                                                    console.log(points[i]);
                                                    if (points[i].localName === "path") {
                                                        if (points[i].point.visible) {
                                                        points[i].point.setVisible(false);
                                                        }
                                                        else {
                                                            points[i].point.setVisible(true);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                series: creerBars(data_bar, event.point)
                            })
                        },
                        
                    }
                }
        }},
        series: creerSeries(data_pie,countries)
    });
    
    $('#bar').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Comparison of the time used by task between men and women in Belgium'
        },
        xAxis: {
            categories: ['Men','Women']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Time spent'
            }
        },
        legend : {
            align: 'left',
            verticalAlign: 'top',
            layout: 'vertical',
            itemMarginTop: 10,
            itemMarginBottom: 10,
            x: 0,
            y: 150  
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                
            },
            series: {
                events : {
                    legendItemClick: function (event) {
                        var color = this.color;
                        var points = $("[fill="+color+"]");
                        console.log(points);
                        console.log(points[1].point.visible);
                        for (var i = 0; i<points.length; i=i+1) {
                            if (points[i].localName === "path") {
                                if (points[i].point.visible) {
                                    points[i].point.setVisible(false);
                                }
                                else {
                                    points[i].point.setVisible(true);
                                }
                            }
                        }
                    }
                }
            }
            
        },
        series: [{
                    name : "Rest",
                    data : [8.42,9.05]
                }, {
                    name : "Work",
                    data : [3.07,1.53]
                }, {
                    name : "Household and family care",
                    data : [2.28,4.10]
                }, {
                    name : "Leisure and social life",
                    data : [5.58,5.06]
                }]
    })
    
    
    var map = Highcharts.charts[0].series[0].chart;
    var pies = creerPies(data_pie, map);
    var bar = Highcharts.charts;
    console.log(bar);
    
    for(var i=0; i<data_pie.length; i = i+1) {
        map.addSeries(pies[i]);
    }
    //console.log(map.series[0].points);
    //map.addSeries(data[0]);
    
});