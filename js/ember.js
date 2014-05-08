var App;

(function application() {

    App = Ember.Application.create({
        rootElement: '#ApplicationView'
    });

    App.router.map(function() {
        this.route('about');
        this.route('resume');
    });

})();


(function models() {

    var attr = DS.attr;

    App.Page = DS.Model.extend({
        isActive: attr('boolean'),
        alias: attr('string'),
        name: attr('string'),
        title: attr('string')
    });

    App.Position = DS.Model.extend({
        title: attr('string')
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
