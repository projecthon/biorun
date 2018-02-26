function chpanel(){
  var tabItems = $api.domAll($api.byId('mytab'), '.aui-tab-item');
  var panels = $api.domAll('.panel');

  for (var i = 0; i < tabItems.length; i++) {
    tabItems[i].onclick = function(){
      if (!$api.hasCls(this, 'aui-active')) {
        //处理active显示
        for (var j = 0; j < tabItems.length; j++) {
          $api.removeCls(tabItems[j], 'aui-active');
        }
        $api.addCls(this, 'aui-active');
        //处理面板显示
        for (var k = 0; k < panels.length; k++) {
          $api.addCls(panels[k], 'hide');
        }
        switch ($api.html(this)) {
          case '消息':
            $api.removeCls(panels[0], 'hide');
            break;
          case '好友':
            $api.removeCls(panels[1], 'hide');
            break;
          case '群组':
            $api.removeCls(panels[2], 'hide');
            break;
        }

      }
    }
  }
}
