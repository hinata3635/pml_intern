document.getElementById("taskAddBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value;
    if (taskText !== "") {
        const taskItem = document.createElement("li");

        // タスクテキストの作成
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // 削除ボタンの作成
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        // リストアイテムにテキストとボタンを追加
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);

        // リストにタスクアイテムを追加
        taskList.appendChild(taskItem);

        // 入力フィールドをクリア
        taskInput.value = "";
    }
});