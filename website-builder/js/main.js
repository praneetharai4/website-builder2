const editor = grapesjs.init({
    container: "#editor",
    fromElement: true,
    width: "auto",
    storageManager: false,

    blockManager: {
        appendTo: "#blocks",
    },
    layerManager: {
        appendTo: "#layer-container",
    },
    styleManager: {
        appendTo: "#style-view",
        sectors: [
            {
                name: "Dimension",
                open: false,
                buildProps: ["width", "min-height", "padding"],
                properties: [
                    {
                        type: "integer",
                        name: "The Width",
                        property: "width",
                        units: ["px", "%", "rem"],
                        defaults: "auto",
                        min: 0,
                    },
                ],
            },
        ],

    },
    panels: {
        defaults: [
            {
                id: "basic-actions",
                el: ".panel__basic-action",
                buttons: [
                    {
                        id: "visibility",
                        active: true,
                        className: "btn-toggle-borders",
                        label: '<i class="bi bi-border"></i>',
                        command: "sw-visibility",
                    },

                ],


            },
            {
                id: "panel-devices",
                el: ".panel__devices",
                buttons: [
                    {
                        id: "device-desktop",
                        label: "<i class='bi bi-laptop'></i>",
                        command: "set-device-desktop",
                        active: true,
                        togglable: false,

                    },
                    {
                        id: "device-mobile",
                        label: "<i class='bi bi-phone'></i>",
                        command: "set-device-mobile",
                        togglable: false,
                      


                    },
                ],

            },
        ],
    },
    deviceManager: {
        devices: [{
            name: "Desktop",
            width: "",
        },
        {
            name: "Mobile",
            width: "320px",
            widthMedia: "480px",

        },
        ],
    },
    plugins: ["gjs-blocks-basic"],
    pluginsOpts: {
        "gjs-blocks-basic": {},

    },
});
editor.Commands.add('set-device-desktop', {
    run: (editor) => editor.setDevice('Desktop'),
  });
  editor.Commands.add('set-device-mobile', {
    run: (editor) => editor.setDevice('Mobile'),
  });