/**
 * links data
 * @type {*[]}
 */
(function () {
    var defaultIcon = 'http://7xp4vm.com1.z0.glb.clouddn.com/favicon.png';

    var tmplFunc = function (obj) {
        return [
            '<li class="item" style="background: #',
            obj.bgColor,
            '"><a href="',
            obj.link,
            '">',
            obj.title,
            '</a></li>'
        ].join('');
    };

    var colors = [
        '455a64',
        '607d8b',
        '009688',
        '212121',
        '727272',
        '0288d1',
        '03a9f4',
        '388e3c',
        'b6b6b6',
        '9e9e9e'

    ];

    var data = [
        {
            title: 'DEMO',
            subTitle: 'subtitle',
            bgColor: '#aaa',
            link: '#'
        }
    ]
    var createItems = function (data) {
        var key, i, len, tmpl='';
        for (i=0,len=data.length;i<20;i++) {
            data[0].bgColor = colors[i%10];
            tmpl += tmplFunc(data[0]);
        }
        $("#J_List").append(tmpl);
    };

    createItems(data);
})();