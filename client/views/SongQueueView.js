// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped table-hover queue-table',
  initialize: function() {
    this.renderAll();
    // this.render();
    this.collection.on('change', function(){
      this.repaint;
    }, this);
    this.collection.on('add', this.addOne, this);
    this.collection//.on('reset', this.renderAll, this)
        .on('remove', this.renderAll, this)
    // }, this);
  },
  addOne: function(song){
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  },
  render: function() {
    return this.$el;
  },
  renderAll: function(){
    this.collection.models.forEach(function(model){
      this.addOne(model);
    }, this);
    this.render();
  },
  repaint: function(){
    // this.$el.empty();
    this.$el.html(this.$el);
  }

});
