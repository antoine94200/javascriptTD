jQuery("#simulation")
  .on("click", ".s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_3" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInOutQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8c0eca62-ed7b-4fec-8c16-cafa24a5e3b8",
                    "transition": {
                      "type": "fade",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-icon_menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_maison > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_profil > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1ec1e7a4-b311-4bef-8dec-451c45425ffb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-icon_profil")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_profil > svg": {
                      "attributes": {
                        "overlay": "#EF7F72"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_menu > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_maison > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-icon_maison")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_maison > svg": {
                      "attributes": {
                        "overlay": "#EF7F72"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_menu > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_profil > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-icon_livre")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#EF7F72"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_menu > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_maison > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-icon_profil > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_2 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_1 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_3 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_4 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_2 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_3 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_4 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_2 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_3 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_4 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_2 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_3 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_4 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_2 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_4 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1_3 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf #s-star-1 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 250
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-THEME" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInOutQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-fond" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-THEME" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-2cd48f3c-16fc-48df-8c1f-334c5f83c0bf .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });