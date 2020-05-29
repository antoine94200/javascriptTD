jQuery("#simulation")
  .on("click", ".s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d9f1fae5-9bf0-478c-811b-0a02d0b3fefc",
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_menu > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_maison > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_profil > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_profil > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_menu > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_maison > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_maison > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_livre > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_menu > svg": {
                      "attributes": {
                        "overlay": "#8A8A8F"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_profil > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_livre > svg": {
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
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_menu > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_maison > svg": {
                      "attributes": {
                        "overlay": "#8C8C8C"
                      }
                    }
                  },{
                    "#s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a #s-icon_profil > svg": {
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
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cd8c89c9-b2f8-4bee-9ce0-4286166c626d"
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
  .on("pageload", ".s-ad81e5c2-3f8b-4d18-8b99-d55f34119a4a .pageload", function(event, data) {
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