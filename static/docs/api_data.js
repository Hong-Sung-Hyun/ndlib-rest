define({ "api": [
  {
    "type": "put",
    "url": "/api/Configure",
    "title": "Advanced Configuration",
    "description": "<p>This endpoint allows for an in-depth specification of the planned experiment. The advanced configuration regards: <ul> <li>Specification of the set of initially infected nodes</li> <li>Specification of nodes/edges weights (i.e., individual threshold/profile)</li> </ul> The configuration will be applied to all the models attached to the experiment (if not specified otherwise). </br> </br> <u>Pay attention</u>: this endpoint should be called only after having instantiated both Network and Model resources.</p>",
    "version": "0.5.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>String composed by comma separated model names.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "status",
            "description": "<p>JSON description of the node/edge attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected JSON Input (could be partially filled)",
          "content": "{\n    'nodes':\n        {\n        'threshold': {\"node1\": 0.1, \"node2\": 0.05, \"node3\": 0.24 },\n        'profile': {\"node1\": 0.4, \"node2\": 0.5, \"node3\": 0.64}\n        },\n    'edges':\n        [\n            {\n                \"source\": \"node1\",\n                \"target\": \"node2\",\n                \"weight\": 0.2\n            },\n            {\n                \"source\": \"node2\",\n                \"target\": \"node3\",\n                \"weight\": 0.7\n            },\n        ],\n    'model': {'initial_infected': [node1, node3]}\n}",
          "type": "json"
        }
      ]
    },
    "name": "configure",
    "group": "Experiment",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Configure', data={'status': json, 'models': 'model1,model2','token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Experiment",
    "groupDescription": "<p>An experiment represents the analytical unit of this REST API, it is composed by: <ul> <li>A single network</li> <li>One or more diffusion models</li> </ul> In order to perform an experiment the user should: <ol> <li><a href=\"#api-Experiment-getexp\">Request a token</a>, which univocally identifies the experiment</li> <li><a href=\"#api-Resources\">Select</a> and <a href=\"#api-Networks\">load</a> resource using a Network Generator or loading an existing Graph</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li>(optional) Use the <a href=\"#api-Experiment-configure\">advanced configuration</a> facilities</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li>(optional) <a href=\"#api-Experiment-resetexp\">Reset</a> the experiment status, modify the models/network</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Configure"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/Experiment",
    "title": "Destroy",
    "description": "<p>Delete all the resources (the network and the models) attached to the specified experiment.</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token identifying the experiment.</p>"
          }
        ]
      }
    },
    "name": "deleteexp",
    "group": "Experiment",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "delete('http://localhost:5000/api/Experiment', data={'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Experiment",
    "groupDescription": "<p>An experiment represents the analytical unit of this REST API, it is composed by: <ul> <li>A single network</li> <li>One or more diffusion models</li> </ul> In order to perform an experiment the user should: <ol> <li><a href=\"#api-Experiment-getexp\">Request a token</a>, which univocally identifies the experiment</li> <li><a href=\"#api-Resources\">Select</a> and <a href=\"#api-Networks\">load</a> resource using a Network Generator or loading an existing Graph</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li>(optional) Use the <a href=\"#api-Experiment-configure\">advanced configuration</a> facilities</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li>(optional) <a href=\"#api-Experiment-resetexp\">Reset</a> the experiment status, modify the models/network</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Experiment"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/ExperimentStatus",
    "title": "Describe",
    "description": "<p>Describe the resources (Network and Models) involved in the experiment.</p>",
    "version": "0.1.0",
    "name": "describeexp",
    "group": "Experiment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token identifying the experiment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "[Python request] Example usage:",
        "content": "post('http://localhost:5000/api/ExperimentStatus')",
        "type": "python"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Experiment",
    "groupDescription": "<p>An experiment represents the analytical unit of this REST API, it is composed by: <ul> <li>A single network</li> <li>One or more diffusion models</li> </ul> In order to perform an experiment the user should: <ol> <li><a href=\"#api-Experiment-getexp\">Request a token</a>, which univocally identifies the experiment</li> <li><a href=\"#api-Resources\">Select</a> and <a href=\"#api-Networks\">load</a> resource using a Network Generator or loading an existing Graph</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li>(optional) Use the <a href=\"#api-Experiment-configure\">advanced configuration</a> facilities</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li>(optional) <a href=\"#api-Experiment-resetexp\">Reset</a> the experiment status, modify the models/network</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/ExperimentStatus"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/Experiment",
    "title": "Create",
    "description": "<p>Setup a new experiment and generate a its unique identifier. An experiment is described by the Network (only one) and Models associated to it.</p>",
    "version": "0.1.0",
    "name": "getexp",
    "group": "Experiment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token identifying the experiment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "get('http://localhost:5000/api/Experiment')",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Experiment",
    "groupDescription": "<p>An experiment represents the analytical unit of this REST API, it is composed by: <ul> <li>A single network</li> <li>One or more diffusion models</li> </ul> In order to perform an experiment the user should: <ol> <li><a href=\"#api-Experiment-getexp\">Request a token</a>, which univocally identifies the experiment</li> <li><a href=\"#api-Resources\">Select</a> and <a href=\"#api-Networks\">load</a> resource using a Network Generator or loading an existing Graph</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li>(optional) Use the <a href=\"#api-Experiment-configure\">advanced configuration</a> facilities</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li>(optional) <a href=\"#api-Experiment-resetexp\">Reset</a> the experiment status, modify the models/network</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Experiment"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/ExperimentStatus",
    "title": "Reset",
    "description": "<p>Reset the status of models attached to the specified experiment. If no models are specified all the current experiment statuses will be reset.</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token identifying the experiment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>String of comma separated model names.</p>"
          }
        ]
      }
    },
    "name": "resetexp",
    "group": "Experiment",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/ExperimentStatus', data={'token': token, 'models': 'model1,model2'})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Experiment",
    "groupDescription": "<p>An experiment represents the analytical unit of this REST API, it is composed by: <ul> <li>A single network</li> <li>One or more diffusion models</li> </ul> In order to perform an experiment the user should: <ol> <li><a href=\"#api-Experiment-getexp\">Request a token</a>, which univocally identifies the experiment</li> <li><a href=\"#api-Resources\">Select</a> and <a href=\"#api-Networks\">load</a> resource using a Network Generator or loading an existing Graph</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li>(optional) Use the <a href=\"#api-Experiment-configure\">advanced configuration</a> facilities</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li>(optional) <a href=\"#api-Experiment-resetexp\">Reset</a> the experiment status, modify the models/network</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/ExperimentStatus"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/Exploratory",
    "title": "List Exploratories",
    "description": "<p>Return the available network endpoints and their parameters</p>",
    "version": "0.6.0",
    "name": "listexploratory",
    "group": "Exploratory",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "exploratories",
            "description": "<p>List of available exploratories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: Available exploratories",
          "content": "{'exploratory':\n    [\n        {\n            \"name\": \"Lastfm_rock\",\n            \"network\": \"Lastfm\",\n            \"node_attributes\": [\"profile\", \"threshold\"],\n            \"edge_attributes\": [\"weight\"],\n            \"description\": \"Diffusion threshold and profiles computed on rock listening data\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "get('http://localhost:5000/api/Exploratory')",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Exploratory",
    "groupDescription": "<p>An exploratory is a pre-configured experiments. It provides: <ul> <li>A network topology</li> <li>An initial status of nodes and edges attributes</li> </ul> To setup the exploratory five seps should be followed: <ol> <li><a href=\"#api-Experiment-getexp\">Create an experiment</a></li> <li><a href=\"#api-Resources-getgraphs\">Load</a> a graph resource for which exploratories are available</li> <li><a href=\"#api-loadexploratory\">Retrieve</a> the exploratory configuration</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment. </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Exploratory"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/Exploratory",
    "title": "Get Configuration",
    "description": "<p>Load the configuration data for a specific exploratory.</p>",
    "version": "0.6.0",
    "name": "loadexploratory",
    "group": "Exploratory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exploratory",
            "description": "<p>The exploratory name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "post('http://localhost:5000/api/Exploratory')",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Exploratory",
    "groupDescription": "<p>An exploratory is a pre-configured experiments. It provides: <ul> <li>A network topology</li> <li>An initial status of nodes and edges attributes</li> </ul> To setup the exploratory five seps should be followed: <ol> <li><a href=\"#api-Experiment-getexp\">Create an experiment</a></li> <li><a href=\"#api-Resources-getgraphs\">Load</a> a graph resource for which exploratories are available</li> <li><a href=\"#api-loadexploratory\">Retrieve</a> the exploratory configuration</li> <li><a href=\"#api-Models\">Select</a> one, or more, diffusion model(s)</li> <li><a href=\"#api-Iterators\">Execute</a> the simulation</li> <li><a href=\"#api-Experiment-deleteexp\">Destroy</a> the experiment. </li> </ol></p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Exploratory"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/CompleteRun",
    "title": "Complete Run",
    "description": "<p>Return the comlpete run for the all the models bind to the provided token.</p>",
    "version": "0.2.0",
    "name": "complete",
    "group": "Iterators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>String composed by comma separated model names.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "iteration",
            "description": "<p>Nodes status after an iteration: 0=susceptible, 1=infected, 2=removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: iteration",
          "content": "{\n    'Model1':\n        [\n            {\n                'iteration': 1,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 0,\n                        'node2': 1,\n                        'node3': 0\n                    }\n            },\n            {\n                'iteration': 2,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 1,\n                        'node2': 1,\n                        'node3': 0\n                    }\n            }\n        ],\n    'Model2':\n        [\n            {\n                'iteration': 1,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 1,\n                        'node2': 0,\n                        'node3': 0\n                    }\n            },\n            {\n                'iteration': 2,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 1,\n                        'node2': 0,\n                        'node3': 1\n                    }\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "post('http://localhost:5000/api/CompleteRun', data={'token': token, 'models': 'model1,model2'})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Iterators",
    "groupDescription": "<p>Endpoints belonging to this family allow the user to require <a href=\"#api-Iterators-iterator\">step-by-step</a>,  <a href=\"#api-Iterators-iteratorbunch\">partial</a> as well as <a href=\"#api-Iterators-complete\">complete</a> runs of the models attached to the experiment.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/CompleteRun"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/Iteration",
    "title": "Iteration",
    "description": "<p>Return the next iteration for all the models bind to the provided token.</p>",
    "version": "0.1.0",
    "name": "iterator",
    "group": "Iterators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>String composed by comma separated model names.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "iteration",
            "description": "<p>Nodes status after an iteration: 0=susceptible, 1=infected, 2=removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: iteration",
          "content": "{\n     'Model1':\n         {\n             'iteration': 1,\n             'status':\n                 {\n                     'node0': 1,\n                     'node1': 0,\n                     'node2': 1,\n                     'node3': 0\n                 }\n         },\n     'Model2':\n         {\n             'iteration': 1,\n             'status':\n                 {\n                     'node0': 1,\n                     'node1': 1,\n                     'node2': 0,\n                     'node3': 0\n                 }\n         }\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "post('http://localhost:5000/api/Iteration', data={'token': token, 'models': 'model1,model2'})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Iterators",
    "groupDescription": "<p>Endpoints belonging to this family allow the user to require <a href=\"#api-Iterators-iterator\">step-by-step</a>,  <a href=\"#api-Iterators-iteratorbunch\">partial</a> as well as <a href=\"#api-Iterators-complete\">complete</a> runs of the models attached to the experiment.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Iteration"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/IterationBunch",
    "title": "Iteration Bunch",
    "description": "<p>Return the next <bunch> iterations for the all the models bind to the provided token.</p>",
    "version": "0.1.0",
    "name": "iteratorbunch",
    "group": "Iterators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>String composed by comma separated model names.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bunch",
            "description": "<p>Then number of iteration to return.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "iteration",
            "description": "<p>Nodes status after an iteration: 0=susceptible, 1=infected, 2=removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: iteration",
          "content": "{\n    'Model1':\n        [\n            {\n                'iteration': 1,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 0,\n                        'node2': 1,\n                        'node3': 0\n                    }\n            },\n            {\n                'iteration': 2,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 1,\n                        'node2': 1,\n                        'node3': 0\n                    }\n            }\n        ],\n    'Model2':\n        [\n            {\n                'iteration': 1,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 1,\n                        'node2': 0,\n                        'node3': 0\n                    }\n            },\n            {\n                'iteration': 2,\n                'status':\n                    {\n                        'node0': 1,\n                        'node1': 1,\n                        'node2': 0,\n                        'node3': 1\n                    }\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "post('http://localhost:5000/api/IterationBunch', data={'token': token, 'bunch': bunch, 'models': 'model1,model2'})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Iterators",
    "groupDescription": "<p>Endpoints belonging to this family allow the user to require <a href=\"#api-Iterators-iterator\">step-by-step</a>,  <a href=\"#api-Iterators-iteratorbunch\">partial</a> as well as <a href=\"#api-Iterators-complete\">complete</a> runs of the models attached to the experiment.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/IterationBunch"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/IndependentCascades",
    "title": "Independent Cascades",
    "description": "<p>Instantiate an Independent Cascades Model on the network bound to the provided token. The edge threshold for each node is assumed equal to 1 divided its number of neighbors: this behavior can be changed by using the &lt;a href&quot;#api-Experiment-configure&quot;&gt;advanced configuration</a> endpoint.</p>",
    "version": "0.5.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          }
        ]
      }
    },
    "name": "indepcascades",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/IndependentCascades', data={'token': token, 'infected': percentage})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/IndependentCascades"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/MajorityRule",
    "title": "Majority Rule",
    "description": "<p>Instantiate the Majority Rule Model on the network bound to the provided token.</p>",
    "version": "0.7.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-N",
            "optional": false,
            "field": "q",
            "description": "<p>The group size.</p>"
          }
        ]
      }
    },
    "name": "majority",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Majority', data={'token': token, 'infected': percentage, 'q': q})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/MajorityRule"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Profile",
    "title": "Profile",
    "description": "<p>Instantiate a Profile Model on the network bound to the provided token.</p>",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "profile",
            "description": "<p>A fixed profile value for all the nodes: if not specified the profile will be assigned using a normal distribution.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          }
        ]
      }
    },
    "name": "profile",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Profile', data={'token': token, 'infected': percentage})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Profile"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/ProfileThreshold",
    "title": "Profile-Threshold",
    "description": "<p>Instantiate a Profile-Threshold Model on the network bound to the provided token.</p>",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "profile",
            "description": "<p>A fixed profile value for all the nodes: if not specified the profile will be assigned using a normal distribution.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "threshold",
            "description": "<p>A fixed threshold value for all the nodes: if not specified the thresholds will be assigned using a normal distribution.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          }
        ]
      }
    },
    "name": "profilethreshold",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/ProfileThreshold', data={'token': token, 'infected': percentage, 'threshold': threshold, 'profile': profile})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/ProfileThreshold"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/QVoter",
    "title": "QVoter",
    "description": "<p>Instantiate the QVoter Model on the network bound to the provided token.</p>",
    "version": "0.9.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "q",
            "description": "<p>Number of neighbours that affect the opinion of an agent</p>"
          }
        ]
      }
    },
    "name": "qvoter",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/QVoter', data={'token': token, 'q': number,'infected': percentage})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/QVoter"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/SI",
    "title": "SI",
    "description": "<p>Instantiate a SI Model on the network bound to the provided token.</p>",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "beta",
            "description": "<p>Infection rate.</p>"
          }
        ]
      }
    },
    "name": "si",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/SI', data={'beta': beta, 'infected': percentage, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/SI"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/SIR",
    "title": "SIR",
    "description": "<p>Instantiate a SIR Model on the network bound to the provided token.</p>",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "beta",
            "description": "<p>Infection rate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "gamma",
            "description": "<p>Recovery rate.</p>"
          }
        ]
      }
    },
    "name": "sir",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/SIR', data={'beta': beta, 'gamma': gamma, 'infected': percentage, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/SIR"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/SIS",
    "title": "SIS",
    "description": "<p>Instantiate a SIS Model on the network bound to the provided token.</p>",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "beta",
            "description": "<p>Infection rate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "lambda",
            "description": "<p>Recovery rate.</p>"
          }
        ]
      }
    },
    "name": "sis",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/SIS', data={'beta': beta, 'lambda': lambda, 'infected': percentage, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/SIS"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Sznajd",
    "title": "Sznajd",
    "description": "<p>Instantiate the Sznajd Model on the network bound to the provided token. The model is defined for complete graphs, however it can be applied to generic ones.</p>",
    "version": "0.7.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          }
        ]
      }
    },
    "name": "sznajd",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Sznajd', data={'token': token, 'infected': percentage})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Sznajd"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/KerteszThreshold",
    "title": "KerteszThreshold",
    "description": "<p>Instantiate a KerteszThreshold Model on the network bound to the provided token.</p>",
    "version": "0.9.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "threshold",
            "description": "<p>A fixed threshold value for all the nodes: if not specified the thresholds will be assigned using a normal distribution.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "adopter_rate",
            "description": "<p>The adopter rate. Fixed probability of self-infection per iteration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "blocked",
            "description": "<p>Percentage of blocked nodes.</p>"
          }
        ]
      }
    },
    "name": "threshold",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/KerteszThreshold', data={'token': token, 'infected': percentage, 'adopters_rate': adopters_rate, 'blocked': blocked, 'threshold': threshold})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/KerteszThreshold"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Threshold",
    "title": "Threshold",
    "description": "<p>Instantiate a Threshold Model on the network bound to the provided token.</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "threshold",
            "description": "<p>A fixed threshold value for all the nodes: if not specified the thresholds will be assigned using a normal distribution.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          }
        ]
      }
    },
    "name": "threshold",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Threshold', data={'token': token, 'infected': percentage, 'threshold': threshold})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Threshold"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Voter",
    "title": "Voter",
    "description": "<p>Instantiate the Voter Model on the network bound to the provided token.</p>",
    "version": "0.7.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "infected",
            "description": "<p>The initial percentage of infected nodes.</p>"
          }
        ]
      }
    },
    "name": "voter",
    "group": "Models",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Voter', data={'token': token, 'infected': percentage})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Models",
    "groupDescription": "<p>Endpoints belonging to this family provide access to model resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Voter"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Generators/BarabasiAlbertGraph",
    "title": "Barabasi-Albert",
    "description": "<p>Create a BA graph compliant to the specified parameters and bind it to the provided token</p>",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "200..100000",
            "optional": false,
            "field": "n",
            "description": "<p>The number of nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": false,
            "field": "m",
            "description": "<p>The number of edges attached to each new node.</p>"
          }
        ]
      }
    },
    "name": "BAGraph",
    "group": "Networks",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Generators/BarabasiAlbertGraph', data={'n': n, 'm': m, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Generators/BarabasiAlbertGraph"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Generators/CompleteGraph",
    "title": "Complete Graph",
    "description": "<p>Create a complete graph of size n and bind it to the provided token</p>",
    "version": "0.9.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "n",
            "description": "<p>The number of nodes.</p>"
          }
        ]
      }
    },
    "name": "CompleteGraph",
    "group": "Networks",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Generators/CompleteGraph', data={'n': n, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Generators/CompleteGraph"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Generators/ERGraph",
    "title": "Erdos-Renyi",
    "description": "<p>Create an ER graph compliant to the specified parameters and bind it to the provided token</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "200..100000",
            "optional": false,
            "field": "n",
            "description": "<p>The number of nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "p",
            "description": "<p>The rewiring probability.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "directed",
            "description": "<p>If the graph should be directed. If not specified an undirected graph will be generated.</p>"
          }
        ]
      }
    },
    "name": "ERGraph",
    "group": "Networks",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Generators/ERGraph', data={'n': n, 'p': p, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Generators/ERGraph"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Generators/WattsStrogatzGraph",
    "title": "Watts-Strogatz",
    "description": "<p>Create a WS graph compliant to the specified parameters and bind it to the provided token</p>",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "200..100000",
            "optional": false,
            "field": "n",
            "description": "<p>The number of nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": false,
            "field": "k",
            "description": "<p>Each node is connected to k nearest neighbors in ring topology</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "p",
            "description": "<p>The probability of rewiring each edge</p>"
          }
        ]
      }
    },
    "name": "WSGraph",
    "group": "Networks",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Generators/WattsStrogatzGraph', data={'n': n, 'k': k, 'p': p, 'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Generators/WattsStrogatzGraph"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/GetGraph",
    "title": "Get Network",
    "description": "<p>Return the json representation of the network analyzed</p>",
    "version": "0.5.0",
    "name": "expgraphs",
    "group": "Networks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>The token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response example:",
          "content": "    {\n    \"directed\": false,\n    \"graph\": {\n        \"name\": \"barabasi_albert_graph(5,1)\"\n    },\n    \"links\": [\n        {\n            \"source\": 0,\n            \"target\": 1\n        },\n        {\n            \"source\": 0,\n            \"target\": 2\n        },\n        {\n            \"source\": 0,\n            \"target\": 3\n        },\n        {\n            \"source\": 0,\n            \"target\": 4\n        }\n    ],\n    \"multigraph\": false,\n    \"nodes\": [\n        {\n            \"id\": 0\n        },\n        {\n            \"id\": 1\n        },\n        {\n            \"id\": 2\n        },\n        {\n            \"id\": 3\n        },\n        {\n            \"id\": 4\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "post('http://localhost:5000/api/GetGraph'data={'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/GetGraph"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/Networks",
    "title": "Load real graph",
    "description": "<p>Create an ER graph compliant to the specified parameters and bind it to the provided token</p>",
    "version": "0.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The network name.</p>"
          }
        ]
      }
    },
    "name": "loadgraph",
    "group": "Networks",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/Networks', data={'name': 'Last.fm','token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Networks"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/UploadNetwork",
    "title": "Upload Network",
    "description": "<p>@apiVersion 0.9.0</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "directed",
            "description": "<p>If the graph is directed</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "graph",
            "description": "<p>JSON description of the graph attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "graph example:",
          "content": "    {\n    \"directed\": false,\n    \"graph\": {\n        \"name\": \"graph_name\"\n    },\n    \"links\": [\n        {\n            \"source\": 0,\n            \"target\": 1\n        },\n        {\n            \"source\": 0,\n            \"target\": 2\n        },\n        {\n            \"source\": 0,\n            \"target\": 3\n        },\n        {\n            \"source\": 0,\n            \"target\": 4\n        }\n    ],\n    \"multigraph\": false,\n    \"nodes\": [\n        {\n            \"id\": 0\n        },\n        {\n            \"id\": 1\n        },\n        {\n            \"id\": 2\n        },\n        {\n            \"id\": 3\n        },\n        {\n            \"id\": 4\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "name": "upload",
    "group": "Networks",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "put('http://localhost:5000/api/UploadNetwork', data={'file': JSON, 'directed': False, 'token': token})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Networks",
    "groupDescription": "<p>Endpoints belonging to this family provide access to network resources.</br> In particular they provide lookup facilities for both real world datasets and network generators. </br> Moreover, the <a href=\"#api-Networks-expgraphs\">Get Network</a> endpoint allows for the download of synthetic (i.e., generated) networks as well as all of those datasets for which are not specified access restriction.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/UploadNetwork"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/Models",
    "title": "Models Destroy",
    "description": "<p>Delete model resources attached to the specified token. If no models are specified all the ones bind to the experiment will be destroyed.</p>",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "models",
            "description": "<p>String composed by comma separated model names.</p>"
          }
        ]
      }
    },
    "name": "deletemodels",
    "group": "Resources",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "delete('http://localhost:5000/api/Models', data={'token': token, 'models': 'model1,model2'})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Resources",
    "groupDescription": "<p>Endpoints belonging to this family provide access to resources, networks and models, listing and lookup facilities.</br> They also handle the destruction phase of experiment resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Models"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/Networks",
    "title": "Network Destroy",
    "description": "<p>Delete the graph resource attached to the specified token</p>",
    "version": "0.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token.</p>"
          }
        ]
      }
    },
    "name": "destroynetwork",
    "group": "Resources",
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "delete('http://localhost:5000/api/Networks', data={'token': token})",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Resources",
    "groupDescription": "<p>Endpoints belonging to this family provide access to resources, networks and models, listing and lookup facilities.</br> They also handle the destruction phase of experiment resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Networks"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/Networks",
    "title": "Real Networks Endpoints",
    "description": "<p>Return the available network endpoints and their parameters</p>",
    "version": "0.4.0",
    "name": "getgraphs",
    "group": "Resources",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "endpoints",
            "description": "<p>List of network endpoints.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: Available networks",
          "content": "{'networks':\n    [\n        {\n            'name': 'Lastfm',\n            'size':\n                {\n                    'nodes': 70000,\n                    'edges': 389639\n                },\n            'description': 'Undirected social graph involving UK users of Last.fm'\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "get('http://localhost:5000/api/Networks')",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Resources",
    "groupDescription": "<p>Endpoints belonging to this family provide access to resources, networks and models, listing and lookup facilities.</br> They also handle the destruction phase of experiment resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Networks"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/Models",
    "title": "Models Endpoints",
    "description": "<p>Return the available models endpoints and their parameter specification</p>",
    "version": "0.1.0",
    "name": "getmodellist",
    "group": "Resources",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "endpoints",
            "description": "<p>List of model endpoints.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: Endpoint List",
          "content": "{'endponts':\n    [\n        {\n            'name': 'Threshold',\n            'uri': 'http://localhost:5000/api/Models/Threshold',\n            'params':\n                {\n                    'token': 'access token',\n                }\n        },\n        {\n            'name': 'SIR',\n            'uri': 'http://localhost:5000/api/Models/SIR',\n            'params':\n                {\n                    'token': 'access token',\n                }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "get('http://localhost:5000/api/Models')",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Resources",
    "groupDescription": "<p>Endpoints belonging to this family provide access to resources, networks and models, listing and lookup facilities.</br> They also handle the destruction phase of experiment resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Models"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/Generators",
    "title": "Network Generator Endpoints",
    "description": "<p>Return the available network endpoints and their parameters</p>",
    "version": "0.1.0",
    "name": "getnetworks",
    "group": "Resources",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "endpoints",
            "description": "<p>List of network endpoints.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example: Endpoint List",
          "content": "{'endpoints':\n    [\n        {\n            'name': 'Erdos Reny',\n            'uri': 'http://localhost:5000/api/Networks/ERGraph',\n            'params':\n                {\n                    'token': 'access token',\n                    'n': 'number of nodes',\n                    'p': 'rewiring probability'\n                }\n        },\n        {\n            'name': 'Barabasi Albert',\n            'uri': 'http://localhost:5000/api/Networks/BarabasiAlbertGraph',\n            'params':\n                {\n                    'token': 'access token',\n                    'n': 'number of nodes',\n                    'm': 'Number of edges to attach from a new node to existing nodes'\n                }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "[python request] Example usage:",
        "content": "get('http://localhost:5000/api/Generators')",
        "type": "json"
      }
    ],
    "filename": "ndlib-rest/ndrest.py",
    "groupTitle": "Resources",
    "groupDescription": "<p>Endpoints belonging to this family provide access to resources, networks and models, listing and lookup facilities.</br> They also handle the destruction phase of experiment resources.</p>",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5000/api/Generators"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "ndlib-rest/static/docs/main.js",
    "group": "_data_users_rossetti_PycharmProjects_ndlib_rest_static_docs_main_js",
    "groupTitle": "_data_users_rossetti_PycharmProjects_ndlib_rest_static_docs_main_js",
    "name": ""
  }
] });
