define(["template","dialog","report/report-model","report/publish-report-dialog-template"],function(a,b,c,d){return Backbone.View.extend({initialize:function(){var a=this;a.model=new c({id:a.id})},publishReport:function(a,c){var e=this;c=c||this.id,this.model.publishReport(a,c,function(f){var g={url:f,type:a};b.showDialog({content:d.render(g),title:"报表发布成功",dialog:{height:500,width:810,open:function(){var a=$(this);a.find(".j-report-list").click(function(){a.dialog("close"),require(["report/list/main-view"],function(a){window.dataInsight.main.destroy(),new a({el:$(".j-main")})})}),a.find(".j-report-edit").click(function(){a.dialog("close"),require(["report/edit/main-view"],function(a){window.dataInsight.main.destroy(),new a({el:$(".j-main"),id:c,isEdit:!0})})}),e.initCopy("copyUrlBtn"),e.initCopy("copyTiledBtn"),e.initCopy("copyEmbeddedBtn")},buttons:{"确定":function(){$(this).dialog("close")}}}})})},initCopy:function(a){var b=null;b=new ZeroClipboard.Client,b.setHandCursor(!0),b.addEventListener("load",function(){}),b.addEventListener("mouseDown",function(){var c=a+"CopyContent",d=$("#"+c).html();d=d.replace(/&lt;/g,"<"),d=d.replace(/&gt;/g,">"),b.setText(d)}),b.addEventListener("complete",function(){alert("复制成功")}),b.glue(a,a+"Container")}})});