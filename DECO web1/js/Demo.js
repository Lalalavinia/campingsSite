
        var dragSrc = document.getElementById('tool')
        var target = document.getElementById('target')

        dragSrc.ondragstart = handle_start
        dragSrc.ondrag = handle_drag
        dragSrc.ondragend = handle_end

        function handle_start(e) {
            // none   move copy link
            e.dataTransfer.effectAllowed = "linkMove";
            console.log('dragstart-在元素开始被拖动时候触发')
        }

        function handle_drag() {
            console.log('drag-在元素被拖动时候反复触发')
        }

        function handle_end() {
            console.log('dragend-在拖动操作完成时触发')
        }


        target.ondragenter = handle_enter
        target.ondragover = handle_over
        target.ondragleave = handle_leave

        target.ondrop = handle_drop

        function handle_enter(e) {
            console.log('handle_enter-当元素进入目的地时触发')
            // 阻止浏览器默认行为
            e.preventDefault()
        }

        function handle_over(e) {
            // 设置dropEffect属性值为move  link  copy none
            e.dataTransfer.dropEffect = "link"
            // console.log('handle_over-当元素在目的地时触发')
            // 阻止浏览器默认行为
            e.preventDefault()
        }

        function handle_leave(e) {
            console.log('handle_leave-当元素离开目的地时触发')
            // 阻止浏览器默认行为
            // e.preventDefault()
        }

        function handle_drop(e) {
          e.stopPropagation();// 不再派发事件。解决Firefox浏览器，打开新窗口的问题。
            console.log('handle_drop-当元素在目的地放下时触发')
            var t = Date.now()
            target.innerHTML = ''
            target.append(t +'Item is added')
            e.preventDefault()
            console.log(e.dataTransfer.types)
            // 打印每种格式类型
            if (e.dataTransfer.types != null) {
                for (var i = 0; i < e.dataTransfer.types.length; i++) {
                    console.log("... types[" + i + "] = " + e.dataTransfer.types[i]);
                }
            }
            // 打印每个item的“kind”和“type”属性值
            if (e.dataTransfer.items != null) {
                for (var i = 0; i < e.dataTransfer.items.length; i++) {
                    console.log("... items[" + i + "].kind = " + e.dataTransfer.items[i].kind + " ; type = " + e.dataTransfer
                        .items[i].type);
                }
            }
        }