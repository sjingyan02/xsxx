// script.js
document.addEventListener('DOMContentLoaded', function() {
    var novelsContainer = document.getElementById('novels-container');
    var chaptersContainer = document.getElementById('chapters-container');
    var novelTitleElement = document.getElementById('novel-title');

    // 获取小说列表
    const novels = novelsData;  // 从novelsData.js中加载数据

    novels.forEach(novel => {
        var novelDiv = document.createElement('div');
        novelDiv.className = 'novel';
        novelDiv.onclick = function() {
            showChapters(novel);
        };

        var title = document.createElement('h2');
        title.innerText = novel.title;
        novelDiv.appendChild(title);

        novelsContainer.appendChild(novelDiv);
    });

    function showChapters(novel) {
        novelsContainer.style.display = 'none';
        chaptersContainer.style.display = 'block';
        novelTitleElement.innerText = novel.title;

        var chaptersHtml = '<button onclick="showNovels()">返回小说列表</button><h1 id="novel-title">' + novel.title + '</h1>';
        novel.chapters.forEach(chapter => {
            chaptersHtml += `
                <div class="chapter" onclick="toggleChapter(this)">
                    <h2>${chapter.title}</h2>
                    <div class="content">
                        <p>${chapter.content.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>`;
        });
        chaptersContainer.innerHTML = chaptersHtml;
    }

    window.toggleChapter = function(chapterElement) {
        var content = chapterElement.querySelector('.content');
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    };

    window.showNovels = function() {
        chaptersContainer.style.display = 'none';
        novelsContainer.style.display = 'block';
        chaptersContainer.innerHTML = '<button onclick="showNovels()">返回小说列表</button><h1 id="novel-title"></h1>';
    };
});
