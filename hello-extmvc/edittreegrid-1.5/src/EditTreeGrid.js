/*!
 * Ext.ux.tree.EditTreeGrid v1.5
 */
﻿/**
 * @class Ext.ux.tree.EditTreeGrid
 * @extends Ext.ux.tree.TreeGrid
 * 
 * <p>可编辑的树列表组件，支持对树节点进行行编辑、上移、下移操作。</p>
 * 
 * <p><b><u>配置功能按钮</u></b></p>
 * <p>EditTreeGrid默认包含5种功能按钮：树节点上移、下移、新增、修改、删除，在使用中可以随意配置使用。</p>
 * <p>通过设置TreeGrid的columns属性，来设置节点单元格的编辑域和功能按钮。</p>
 * 
 * <p>单元格编辑域设置Column的editor属性，需要先实例化Field对象，配置如下：</p>
 * <p><pre><code>
columns: [{
    header: 'Task',
    dataIndex: 'task',
    width: 230,
    editor: new Ext.form.TextField({  // 将实例化之后的对象赋给editor属性
        allowBlank: false
    })
}, {
    // ...省略代码...
}],
 * </code></pre></p>
 * 
 * <p>功能按钮设置Column的buttons、buttonIconCls、buttonText、buttonTips、buttonHandler五个属性</p>
 * <div class="mdetail-params"><ul>
 * <li><b>buttons</b> : String/Array<div class="sub-desc">功能按钮唯一标识，
 * 默认包括5种: 'upgrade', 'degrade', 'add' 'update' 'remove'，可以自定义扩展</div></li>
 * <li><b>buttonIconCls</b> : String/Array<div class="sub-desc">功能按钮图标</div></li>
 * <li><b>buttonText</b> : String/Array<div class="sub-desc">功能按钮显示文字</div></li>
 * <li><b>buttonTips</b> : String/Array<div class="sub-desc">功能按钮tip提示</div></li>
 * <li><b>buttonHandler</b> : Function/Array<div class="sub-desc">功能按钮点击事件触发执行函数，这个函数只有在
 * {@link #rowEdit}为False时生效</div></li>
 * </ul></div>
 * <p>功能按钮完全手动配置，需要哪个就配置哪个，功能按钮配置方式如下：</p>
 * <p><pre><code>
columns: [{
    // ...省略代码...
}, {
    header: '排序',
    width: 80,
    buttons: ['upgrade', 'degrade'],
    buttonIconCls: ['x-treegrid-button-upgrade', 'x-treegrid-button-degrade'],
    buttonTips: ['上移', '下移']
}, {
    header: '新增子分类',
    width: 80,
    buttons: 'add',
    buttonIconCls: 'x-treegrid-button-add',
    buttonTips: '新增'
}, {
    header: '操作',
    width: 130,
    buttons: ['update', 'remove'],
    buttonText: ['编辑', '删除']
}],
 * </code></pre></p>
 * 
 * <p><b><u>自定义功能按钮的事件</u></b></p>
 * <p>当只需要功能按钮，而不需要行编辑功能时，可以设置{@link #rowEdit}为False，设置完{@link #rowEdit}，
 * 就可以自定义按钮事件了，如下：</p>
 * <p><pre><code>
var tree = new Ext.ux.tree.EditTreeGrid({
    // ...省略代码...
    
    rowEdit: false,  // 设置为false，关闭行编辑功能
    
    columns: [{
        // ...省略代码...
    }, {
        header: '新增子分类',
        width: 80,
        buttons: 'add',
        buttonIconCls: 'x-treegrid-button-add',
        buttonTips: '新增',
        buttonHandler: function(node) {} // 新增按钮事件，回调函数唯一的参数为当前行树节点
    }, {
        header: '操作',
        width: 130,
        buttons: ['update', 'remove'],
        buttonText: ['编辑', '删除'],
        buttonText: [function(node) {}, function(node) {}] // 编辑、删除功能按钮回调函数
    }]
});
 * </code></pre></p>
 * 
 * <p><b><u>扩展功能按钮</u></b></p>
 * <p>通过继承Ext.ux.tree.EditTreeGrid来扩展新的功能按钮，如下：</p>
 * 
 * <p><pre><code>
// 扩展一个自定义功能按钮
SubTreeGrid = Ext.extend(Ext.ux.tree.EditTreeGrid, {
    // 单击按钮执行动作，仅当rowEdit==true时有效
    customNode: function(node) {
        // 执行按钮动作
        
        // 调用AJAX请求
        this.doRequest('custom', {id: node.id});
    }
});

// 在应用时使用自定义的按钮
columns: [{
    // ...省略代码...
}, {
    header: '自定义功能',
    width: 80,
    buttons: 'custom',
    buttonIconCls: 'customCls',
    buttonTips: '自定义'
}],
 * </code></pre></p>
 * 
 * @xtype edittreegrid
 */
Ext.ux.tree.EditTreeGrid = Ext.extend(Ext.ux.tree.TreeGrid, {
    /**
     * @cfg {String} idProperty ID属性名 (defaults to 'id')
     */
    idProperty: 'id',

    /**
     * @cfg {Boolean} enableSort True启用列排序（默认false），如果启用了列排序功能，会导致树节点上移（upgrade）、下移（degrade）两个功能失效
     */
    enableSort: false,

    /**
     * @cfg {Boolean} enableHdMenu True启用列隐藏功能（默认false），此属性暂时禁用
     */
    enableHdMenu: false,

    /**
     * @cfg {String} highlightColor 增删改动作执行完后，高亮提示颜色 (defaults to '#d9e8fb')
     */
    highlightColor: '#d9e8fb',

    /**
     * @cfg {Number} depth 树层级，最深层级关系，默认无级限制
     */
    depth: Number.MAX_VALUE,

    /**
     * @cfg {Object} requestApi <p>设置树节点‘增’、‘删’、‘查’、‘上移’、‘下移’AJAX远程调用接口。</p>
     * 
     * <p>与服务端交互时，AJAX请求提交参数保留关键字，如下：</p>
     * <div class="mdetail-params"><ul>
     * <li><b>id</b> : 树节点ID</li>
     * <li><b>parentNodeId</b> : 父节点ID</li>
     * <li><b>requestAction</b> : 当前请求执行动作（点击功能按钮动作）</li>
     * </ul></div>
     * 
     * <p>For example:
     * <pre><code>
requestApi: {
    upgrade: '/rest/upgrade',
    degrade: '/rest/degrade',
    add: '/rest/add',  // 服务端必须返回idProperty的新节点ID
    update: '/rest/update',
    remove: '/rest/remove'
}

// 或者，如果希望在请求结束后，执行回调函数，可以向下面这样写：

requestApi: {
    upgrade: {
        url: '/rest/upgrade',
        success: function(response, options) {
            // 成功后调函数
        }, 
        failure: function(response, options) {
            // 失败回调函数
        }
    },
    degrade: '/rest/degrade',
    add: '/rest/add',  // 服务端必须返回idProperty的新节点ID
    update: '/rest/update',
    remove: '/rest/remove'
}
     * </code></pre>
     */

    /**
     * @cfg {Boolean} rowEdit 行编辑选项开关，True开启行编辑功能，False表示点击功能按钮时，只触发回调函数，默认true
     */
    rowEdit: true,
    
    /**
     * @cfg {String} delConfirm 删除树节点提示确认框标题
     */
    delConfirm: 'Confirm',
    
    /**
     * @cfg {String} delConfirmMsg 删除树节点提示确认框内容
     */
    delConfirmMsg: 'Are you sure you want to do that?',

    // private
    isTreeEditor: true,

    // private
    initComponent: function() {
        this.enableHdMenu = false; // TODO 此属性暂时禁用，需要解决功能按钮被隐藏时，无法重新渲染的问题

        if (this.rowEdit) {
            this.animate = false; // 当treegrid为行编辑状态时，需要关闭折叠/展开动画效果，否则会导致行编辑组件定位不错误

            this.editor = new Ext.ux.tree.TreeRowEditor({
                listeners: {
                    scope: this,
                    canceledit: this.cancelEdit,
                    afteredit: this.saveNode
                }
            });
            this.plugins = this.plugins || [];
            this.plugins.push(this.editor);
        }

        Ext.ux.tree.EditTreeGrid.superclass.initComponent.call(this);
    },

    // private
    beforeDestroy: function() {
        Ext.destroy(this.editor);
        Ext.ux.tree.EditTreeGrid.superclass.beforeDestroy.call(this);
    },

    // private
    initColumns: function() {
        var cs = this.columns, len = cs.length, columns = [], i, c, tpl;

        for (i = 0; i < len; i++) {
            c = cs[i];
            if (!c.isColumn) {
                c.xtype = c.xtype ? (/^tg/.test(c.xtype) ? c.xtype : 'tg' + c.xtype) : 'tgcolumn';

                // 构建操作功能
                if (c.buttons) {
                    c.buttons = Ext.isArray(c.buttons) ? c.buttons : [c.buttons];
                    c.buttonIconCls = Ext.isDefined(c.buttonIconCls) ? (Ext.isArray(c.buttonIconCls) ? c.buttonIconCls : [c.buttonIconCls]) : [];
                    c.buttonText = Ext.isDefined(c.buttonText) ? (Ext.isArray(c.buttonText) ? c.buttonText : [c.buttonText]) : [];
                    c.buttonTips = Ext.isDefined(c.buttonTips) ? (Ext.isArray(c.buttonTips) ? c.buttonTips : [c.buttonTips]) : [];
                    if (this.rowEdit) {
                        c.buttonHandler = [];
                    } else {
                        c.buttonHandler = c.buttonHandler || [];
                        c.buttonHandler = Ext.isArray(c.buttonHandler) ? c.buttonHandler : [c.buttonHandler];
                    }
                    tpl = [];
                    Ext.each(c.buttons, function(b, index) {
                        b = Ext.util.Format.lowercase(b);
                        tpl.push('<div gridbtn="', b, '" class="x-treegrid-button-item x-toolbar"></div>');
                        if (this.rowEdit) {
                            c.buttonHandler.push(this[b + 'Node']);
                        }
                    }, this);
                    c.tpl = new Ext.XTemplate(tpl);
                    c.dataIndex = this.idProperty;
                    c.editable = false;
                }

                c = Ext.create(c);
            }
            c.init(this);
            columns.push(c);

            if (this.enableSort !== false && c.sortable !== false) {
                c.sortable = true;
                this.enableSort = true;
            }
        }

        this.columns = columns;
    },

    updateColumnWidths: function() {
        var cols = this.columns, colCount = cols.length, groups = this.outerCt.query('colgroup'), groupCount = groups.length, c, g, i, j;

        for (i = 0; i < colCount; i++) {
            c = cols[i];
            for (j = 0; j < groupCount; j++) {
                g = groups[j];
                g.childNodes[i].style.width = (c.hidden ? 0 : c.width) + 'px';
            }
        }

        for (i = 0, groups = this.innerHd.query('td'), len = groups.length; i < len; i++) {
            c = Ext.fly(groups[i]);
            if (cols[i] && cols[i].hidden) {
                c.addClass('x-treegrid-hd-hidden');
            } else {
                c.removeClass('x-treegrid-hd-hidden');
            }
        }

        var tcw = this.getTotalColumnWidth();
        Ext.fly(this.innerHd.dom.firstChild).setWidth(tcw + (this.scrollOffset || 0));
        this.outerCt.select('table').each(function(el, c, idx) {
            if (!el.hasClass('x-btn')) {
                el.setWidth(tcw);
            }
        }, this);
        this.syncHeaderScroll();
    },

    /**
     * 添加节点
     * @param {Ext.tree.TreeNode} parentNode
     */
    addNode: function(parentNode) {
        if (this.editor.editing || parentNode.getDepth() + 1 > this.depth) {
            return;
        }

        var o = {
            _isNewTreeGridNode: true
        };
        o[this.idProperty] = '';
        var cs = this.columns, len = cs.length, c;
        for (i = 0; i < len; i++) {
            c = cs[i];
            if (c.dataIndex) {
                o[c.dataIndex] = '';
            }
        }

        var node = new Ext.tree.TreeNode(o);
        if (parentNode.isLeaf()) {
            parentNode.leaf = false;
        } else if (parentNode.lastChild) {
            var degradeButton = this.getButton(parentNode.lastChild, 'degrade');
            if (degradeButton) {
                degradeButton.enable();
            }
        }
        parentNode.expand(false, false, function() {
            parentNode.appendChild(node);
            Ext.fly(node.ui.elNode).highlight(this.highlightColor);
            this.editNode(node);
        }, this);
    },

    /**
     * 修改节点
     * @param {Ext.tree.TreeNode} node
     */
    updateNode: function(n) {
        if (this.editor.editing) {
            return;
        }
        this.editNode(n);
    },

    // private
    cancelEdit: function(n) {
        if (n.attributes._isNewTreeGridNode) {
            var parentNode = n.parentNode;
            if (parentNode.childNodes.length == 1) {
                parentNode.leaf = true;
            }
            n.remove();
            if (parentNode.childNodes.length < 1) {
                this.updateLeafIcon(parentNode);
            } else {
                var degradeButton = this.getButton(parentNode.lastChild, 'degrade');
                if (degradeButton) {
                    degradeButton.disable();
                }
            }
        }
    },

    // private
    saveNode: function(n, changes) {
        Ext.fly(n.ui.elNode).highlight(this.highlightColor);

        var params = {}, options = {
            node: n,
            changes: changes
        };
        Ext.applyIf(params, n.attributes);
        params.parentNodeId = n.parentNode.id;

        var cm = this.columns;
        Ext.iterate(changes, function(name, value) {
            var index = 0, c;
            for (var i = 0, len = cm.length; i < len; i++) {
                c = cm[i];
                if (c.dataIndex == name) {
                    index = i;
                    break;
                }
            }
            Ext.fly(n.ui.elNode.childNodes[index]).addClass('x-grid3-dirty-cell');
        });

        this.doRequest(n.attributes._isNewTreeGridNode ? 'add' : 'update', this.filterParams(params), this.processSave, options);
    },

    // private
    processSave: function(response, options) {
        try {
            var n = options.node, changes = options.changes;
            if (n.attributes._isNewTreeGridNode) {
                var resp = Ext.decode(response.responseText);
                n.attributes._isNewTreeGridNode = false;
                if (resp.id) {
                    n.setId(resp.id);
                }
                if (resp[this.idProperty]) {
                    n.attributes[this.idProperty] = resp[this.idProperty];
                }
            }
            var cm = this.columns;
            Ext.iterate(changes, function(name, value) {
                var index = 0, c;
                for (var i = 0, len = cm.length; i < len; i++) {
                    c = cm[i];
                    if (c.dataIndex == name) {
                        index = i;
                        break;
                    }
                }
                Ext.fly(n.ui.elNode.childNodes[index]).removeClass('x-grid3-dirty-cell');
            });
        } catch (e) {
        }
    },

    /**
     * 移除节点
     * @param {Ext.tree.TreeNode} node
     */
    removeNode: function(n) {
        if (this.editor.editing) {
            return;
        }

        var parentNode = n.parentNode, previousSibling = n.previousSibling, nextSibling = n.nextSibling;
        if (parentNode.childNodes.length == 1) {
            parentNode.leaf = true;
        }
        n.remove();
        if (parentNode.childNodes.length < 1) {
            this.updateLeafIcon(parentNode);
        } else {
            if (previousSibling && previousSibling.isLast()) {
                var degradeButton = this.getButton(previousSibling, 'degrade');
                if (degradeButton) {
                    degradeButton.disable();
                }
            }
            if (nextSibling && nextSibling.isFirst()) {
                var upgradeButton = this.getButton(nextSibling, 'upgrade');
                if (upgradeButton) {
                    upgradeButton.disable();
                }
            }
        }

        var params = {
            id: n.id,
            parentNodeId: parentNode.id
        };
        params[this.idProperty] = n.attributes[this.idProperty];
        this.doRequest('remove', this.filterParams(params));
    },

    /**
     * 上移节点
     * @param {Ext.tree.TreeNode} node
     */
    upgradeNode: function(n) {
        if ((this.editor && this.editor.editing) || n.isFirst()) {
            return;
        }
        n.parentNode.insertBefore(n, n.previousSibling);
        if (n.isFirst()) {
            this.getButton(n, 'upgrade').disable();
            this.getButton(n, 'degrade').enable();
            this.getButton(n.nextSibling, 'upgrade').enable();
            if (n.nextSibling.isLast()) {
                this.getButton(n.nextSibling, 'degrade').disable();
            }
        } else {
            this.getButton(n, 'degrade').enable();
            this.getButton(n.nextSibling, 'upgrade').enable();
            if (n.nextSibling.isLast()) {
                this.getButton(n.nextSibling, 'degrade').disable();
            }
        }
        Ext.fly(n.ui.elNode).highlight(this.highlightColor);

        var params = {
            id: n.id,
            parentNodeId: n.parentNode.id
        };
        params[this.idProperty] = n.attributes[this.idProperty];
        this.doRequest('upgrade', this.filterParams(params));
    },

    /**
     * 下移节点
     * @param {Ext.tree.TreeNode} node
     */
    degradeNode: function(n) {
        if ((this.editor && this.editor.editing) || n.isLast()) {
            return;
        }
        n.parentNode.insertBefore(n, n.nextSibling.nextSibling);
        if (n.isLast()) {
            this.getButton(n, 'upgrade').enable();
            this.getButton(n, 'degrade').disable();
            if (n.previousSibling.isFirst()) {
                this.getButton(n.previousSibling, 'upgrade').disable();
            }
            this.getButton(n.previousSibling, 'degrade').enable();
        } else {
            this.getButton(n, 'upgrade').enable();
            this.getButton(n, 'degrade').enable();
            if (n.previousSibling.isFirst()) {
                this.getButton(n.previousSibling, 'upgrade').disable();
            }
            this.getButton(n.previousSibling, 'degrade').enable();
        }
        Ext.fly(n.ui.elNode).highlight(this.highlightColor);

        var params = {
            id: n.id,
            parentNodeId: n.parentNode.id
        };
        params[this.idProperty] = n.attributes[this.idProperty];
        this.doRequest('degrade', this.filterParams(params));
    },

    /*
     * @private
     * 执行AJAX调用动作，参数requestAction为保留关键字
     * @param {String} action 执行动作，功能按钮唯一标识，会作为AJAX请求的requestAction参数提交给服务端处理
     * @param {Object} params 提交到服务端的参数
     * @param {Function} callback AJAX请求回调函数
     * @param {Object} options AJAX请求选项，参见{@link Ext.Ajax#request}
     */
    doRequest: function(action, params, callback, o) {
        if (!this.requestApi || !this.requestApi[action]) {
            return;
        }
        params = Ext.apply({
            requestAction: action
        }, params);
        o = Ext.applyIf(o || {}, {
            params: params
        });
        if (Ext.isString(this.requestApi[action])) {
            o.url = this.requestApi[action];
        } else {
            Ext.applyIf(o, this.requestApi[action]);
        }
        if (callback) {
            if (o.success) {
                o.success = callback.createDelegate(this).createSequence(o.success);
            } else if (o.callback) {
                o.callback = callback.createDelegate(this).createSequence(o.callback);
            } else {
                o.success = callback.createDelegate(this);
            }
        }
        Ext.Ajax.request(o);
    },

    // private
    getButton: function(n, k) {
        return n.buttons.get(k);
    },

    // private
    updateLeafIcon: function(n) {
        if (n.ui.elNode) {
            Ext.fly(n.ui.elNode).replaceClass("x-tree-node-collapsed", "x-tree-node-leaf");
        }
    },

    // private
    filterParams: function(params) {
        delete params.uiProvider;
        delete params.iconCls;
        delete params.loader;
        delete params.leaf;
        delete params.children;
        delete params._isNewTreeGridNode;
        return params;
    },

    /**
     * 禁用功能按钮，上移、下移节点功能按钮除外；
     * @param {String/Ext.tree.TreeNode} node 树节点id或对象
     * @param {String} button 
     */
    disableButton: function(n, b) {
        n = Ext.isString(n) ? this.getNodeById(n) : n;
        n.disableButton(b);
    },
    
    /**
     * 启用功能按钮，上移、下移节点功能按钮除外；
     * @param {String/Ext.tree.TreeNode} node 树节点id或对象
     * @param {String} button 
     */
    enableButton: function(n, b) {
        n = Ext.isString(n) ? this.getNodeById(n) : n;
        n.enableButton(b);
    },
    
    /**
     * 隐藏功能按钮
     * @param {String/Ext.tree.TreeNode} node 树节点id或对象
     * @param {String} button 
     */
    hideButton: function(n, b) {
        n = Ext.isString(n) ? this.getNodeById(n) : n;
        n.hideButton(b);
    },
    
    /**
     * 显示功能按钮
     * @param {String/Ext.tree.TreeNode} node 树节点id或对象
     * @param {String} button 
     */
    showButton: function(n, b) {
        n = Ext.isString(n) ? this.getNodeById(n) : n;
        n.showButton(b);
    }
});

Ext.reg('edittreegrid', Ext.ux.tree.EditTreeGrid);

Ext.apply(Ext.ux.tree.TreeGridNodeUI.prototype, {
    renderElements: function(n, a, targetNode, bulkRender) {
        var t = n.getOwnerTree(), cols = t.columns, c = cols[0], i, buf, len;

        this.indentMarkup = n.parentNode ? n.parentNode.ui.getChildIndent() : '';

        buf =
                ['<tbody class="x-tree-node">', '<tr ext:tree-node-id="', n.id, '" class="x-tree-node-el x-tree-node-leaf ', a.cls, '">', '<td class="x-treegrid-col">', '<span class="x-tree-node-indent">', this.indentMarkup, "</span>", '<img src="', this.emptyIcon, '" class="x-tree-ec-icon x-tree-elbow">', '<img src="', a.icon
                        || this.emptyIcon, '" class="x-tree-node-icon', (a.icon ? " x-tree-node-inline-icon" : ""), (a.iconCls ? " " + a.iconCls : ""), '" unselectable="on">', '<a hidefocus="on" class="x-tree-node-anchor" href="', a.href
                        ? a.href
                        : '#', '" tabIndex="1" ', a.hrefTarget ? ' target="' + a.hrefTarget + '"' : '', '>', '<span unselectable="on">', (c.tpl ? c.tpl.apply(a) : a[c.dataIndex] || c.text), '</span></a>', '</td>'];

        for (i = 1, len = cols.length; i < len; i++) {
            c = cols[i];
            buf.push('<td class="x-treegrid-col ', (c.cls ? c.cls : ''), '">', '<div unselectable="on" class="', c.buttons ? 'x-treegrid-button' : 'x-treegrid-text', '"', (c.align
                    ? ' style="text-align: ' + c.align + ';"'
                    : ''), '>', (c.tpl ? c.tpl.apply(a) : a[c.dataIndex]), '</div>', '</td>');
        }

        buf.push('</tr><tr class="x-tree-node-ct"><td colspan="', cols.length, '">', '<table class="x-treegrid-node-ct-table" cellpadding="0" cellspacing="0" style="table-layout: fixed; display: none; width: ', t.innerCt.getWidth(), 'px;"><colgroup>');
        for (i = 0, len = cols.length; i < len; i++) {
            buf.push('<col style="width: ', (cols[i].hidden ? 0 : cols[i].width), 'px;" />');
        }
        buf.push('</colgroup></table></td></tr></tbody>');

        if (bulkRender !== true && n.nextSibling && n.nextSibling.ui.getEl()) {
            this.wrap = Ext.DomHelper.insertHtml("beforeBegin", n.nextSibling.ui.getEl(), buf.join(''));
        } else {
            this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf.join(''));
        }

        if (!n.buttons) {
            n.buttons = new Ext.util.MixedCollection(false, function(o) {
                return o.itemId;
            });
        }

        var wrapEl = Ext.get(this.wrap);
        for (i = 0, len = cols.length; i < len; i++) {
            c = cols[i];
            if (c.buttons) {
                Ext.each(c.buttons, function(b, index) {
                    var handler = c.buttonHandler[index];
                    var btn = new Ext.Button({
                        itemId: b,
                        disabled: (n.attributes[b + 'BtnDisabled'] === true) || (b == 'add' && n.getDepth() == t.depth), // 最大深度树节点，禁用添加按钮
                        hidden: (n.attributes[b + 'BtnHidden'] === true),
                        iconCls: c.buttonIconCls[index],
                        text: c.buttonText[index],
                        tooltip: c.buttonTips[index],
                        handler: function() {
                            if (b == 'remove') {
                                Ext.MessageBox.confirm(t.delConfirm, t.delConfirmMsg, function(btn) {
                                    if (btn == 'yes') {
                                        handler.call(t, n);
                                    }
                                });
                                return;
                            }
                            handler.call(t, n);
                        },
                        scope: t
                    });
                    if ((b == 'upgrade' && n.isFirst()) || (b == 'degrade' && n.isLast())) {
                        btn.disable();
                    }
                    n.buttons.add(btn);
                    btn.render(wrapEl.child('[gridbtn=' + b + ']'));
                }, this);
            }
        }

        this.elNode = this.wrap.childNodes[0];
        this.ctNode = this.wrap.childNodes[1].firstChild.firstChild;
        var cs = this.elNode.firstChild.childNodes;
        this.indentNode = cs[0];
        this.ecNode = cs[1];
        this.iconNode = cs[2];
        this.anchor = cs[3];
        this.textNode = cs[3].firstChild;
    }
});

Ext.apply(Ext.tree.TreeNode.prototype, {
    disableButton: function(b) {
        if (b == 'upgrade' || b == 'degrade') {
            return;
        }
        if (b) {
            this.buttons.get(b).disable();
        }
    },

    enableButton: function(b) {
        if (b == 'upgrade' || b == 'degrade') {
            return;
        }
        if (b) {
            this.buttons.get(b).enable();
        }
    },

    hideButton: function(b) {
        if (b) {
            this.buttons.get(b).hide();
        }
    },

    showButton: function(b) {
        if (b) {
            this.buttons.get(b).show();
        }
    },

    originalTreeNodeDestroy: Ext.tree.TreeNode.prototype.destroy,
    destroy: function(silent) {
        if (this.buttons) {
            this.buttons.each(function(btn) {
                Ext.destroy(btn);
            }, this);
            this.buttons.clear()
        }
        this.originalTreeNodeDestroy.call(this, silent);
    }
});
