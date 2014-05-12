var App;

(function application() {
    'use strict';

    App = Ember.Application.create({
        rootElement: '#layout'
    });

    App.Router.map(function() {
        this.route('about');
        this.route('contact');
        this.route('resume');
    });

    App.AboutRoute = Ember.Route.extend({
        model: function(params) {
            console.log('about route', params);
            //return this.store('page', 'about');
        }
    });

    App.ResumeRoute = Ember.Route.extend({
        model: function(params) {
            console.log('resume route', params);
            //return this.store('page', 'resume');
        }
    })
})();



(function components() {
    'use strict';

    App.PageHeaderComponent = Ember.Component.extend({
        elementId: 'header',
        tagName: 'header'
    });
})();


(function views() {
    'use strict';

    App.View = Ember.View.extend({
        className: 'container'
    });

})();


(function models() {
    'use strict';

    var attr = DS.attr;

    App.Page = DS.Model.extend({
        isActive: attr('boolean'),
        alias: attr('string'),
        name: attr('string'),
        title: attr('string')
    });

    App.Position = DS.Model.extend({
        title: attr('string'),
        company: attr('string'),
        startDate: attr('date'),
        endDate: attr('date'),
        description: attr('string')
    });

    App.Service = DS.Model.extend({
        title: attr('string'),
        description: attr('string')
    });

    App.Skill = DS.Model.extend({
        typeId: attr('integer'),
        isActive: attr('boolean'),
        alias: attr('string'),
        dsecription: attr('string')
    });
})();
