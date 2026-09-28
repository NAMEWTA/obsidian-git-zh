/**
 * Chinese UI strings keyed by the original English text.
 * Missing keys fall back to English.
 */
export const zh: Record<string, string> = {
    '\n            Sets the relative path to the vault from which the Git binary should be executed.\n             Mostly used to set the path to the Git repository, which is only required if the Git repository is below the vault root directory. Use "\\" instead of "/" on Windows.\n            ':
        '\n            设置 Git 可执行文件所使用的、相对于库的路径。\n             主要用于指定 Git 仓库路径；仅当 Git 仓库位于库根目录之下时才需要。在 Windows 上请使用 "\\" 而不是 "/"。\n            ',
    " (Index)": "（暂存区）",
    " (Working Tree)": "（工作区）",
    ' Specify custom date format. E.g. "{format}. See ':
        ' 指定自定义日期格式。例如 "{format}。参见 ',
    " The commit hash, author name and authoring date can all be individually toggled.":
        " 提交哈希、作者名和编写日期都可以单独开关。",
    " and for matches (at least {count} characters) within the same (or all) commit(s), ":
        "，并对同一（或全部）提交中至少 {count} 个字符的匹配显示",
    " commit's information is shown.": "提交的信息。",
    " defined by themes (e.g. ": "（由主题定义，例如 ",
    " for more formats.": " 了解更多格式。",
    " or ": " 或 ",
    " to display the authoring date.": "，用于显示编写日期。",
    '"Commit-and-sync" and "pull" takes care of submodules. Missing features: Conflicted files, count of pulled/pushed/committed files. Tracking branch needs to be set for each submodule.':
        "「提交并同步」和「拉取」会处理子模块。暂不支持：冲突文件、拉取/推送/提交的文件数量。每个子模块都需要设置跟踪分支。",
    "({count} unpushed commits)": "（{count} 个未推送的提交）",
    "), because they automatically adapt to theme changes.":
        "），因为它们会自动适应主题变化。",
    ", cut-copy-paste-ing of text is followed within the same commit and the original commit of authoring will be shown.":
        "」时，会在同一提交内跟踪剪切、复制和粘贴，并显示该行最初所属的提交。",
    ", cut-copy-paste-ing text inbetween multiple commits will be detected.":
        "」时，会检测跨越多个提交的剪切、复制和粘贴。",
    ".": "。",
    ".git": ".git",
    "1y": "1y",
    "A script that is run using 'sh -c' to generate the commit message. May be used to generate commit messages using AI tools. Available placeholders: {{hostname}}, {{date}}.":
        "使用 'sh -c' 运行的脚本，用来生成提交说明。可用于借助 AI 工具生成提交说明。可用占位符：{{hostname}}、{{date}}。",
    "Abort clone": "中止克隆",
    Aborted: "已中止",
    "Aborted clone": "已中止克隆",
    "Aborted commit, because the following files are too big:\n- {files}\nPlease remove them or add to .gitignore.":
        "已中止提交，因为以下文件过大：\n- {files}\n请删除它们，或加入 .gitignore。",
    "Aborted. No upstream-branch is set!": "已中止。尚未设置上游分支！",
    'Add "Stage", "Unstage" and "Add to .gitignore" actions to the file menu.':
        "在文件菜单中加入「暂存」「取消暂存」和「加入 .gitignore」。",
    "Add file to .gitignore": "将文件加入 .gitignore",
    "Additional PATH environment variable paths": "附加 PATH 环境变量路径",
    "Additional environment variables": "附加环境变量",
    "Adds commands to stage/reset individual Git diff hunks and navigate between them via 'Go to next/prev hunk' commands.":
        "添加命令，用于暂存/还原单个 Git 差异块，并通过「转到下一个/上一个差异块」在它们之间跳转。",
    Advanced: "高级",
    "Affected files:": "涉及的文件：",
    "After the Conflicts section is empty, enter a commit message and commit the staged changes. This finishes the merge. You can then push normally.":
        "当「冲突」区域为空后，输入提交说明并提交已暂存的更改。这样就会完成合并，之后可以正常推送。",
    "All conflicts have been marked as resolved.": "所有冲突都已标记为已解决。",
    "Amend staged": "修正已暂存的提交",
    "And {count} more files": "以及另外 {count} 个文件",
    "Are you sure you want to DELETE the {files}? They are deleted according to your Obsidian trash settting.":
        "确定要删除{files}吗？将按照你在 Obsidian 中的回收站设置删除。",
    "Are you sure you want to discard ALL changes in {files}?":
        "确定要丢弃 {files} 中的全部更改吗？",
    "Authentication failed. Please try with different credentials":
        "认证失败。请换一组凭据再试",
    "Authentication/commit author": "认证 / 提交作者",
    "Author email for commit": "提交所用的作者邮箱",
    "Author name display": "作者名显示",
    "Author name for commit": "提交所用的作者名",
    "Author's local": "作者本地时区",
    "Authoring date display": "编写日期显示",
    "Authoring date display timezone": "编写日期的时区",
    "Auto backup: Please enter a custom commit message. Leave empty to abort":
        "自动备份：请输入自定义提交说明。留空则中止",
    "Auto commit after latest commit": "在最近一次提交之后再自动提交",
    "Auto commit after stopping file edits": "停止编辑文件后再自动提交",
    "Auto commit interval (minutes)": "自动提交间隔（分钟）",
    "Auto commit only staged files": "自动提交时只提交已暂存的文件",
    "Auto commit-and-sync after latest commit":
        "在最近一次提交之后再自动提交并同步",
    "Auto commit-and-sync after stopping file edits":
        "停止编辑文件后再自动提交并同步",
    "Auto commit-and-sync interval (minutes)": "自动提交并同步间隔（分钟）",
    "Auto commit-and-sync only staged files":
        "自动提交并同步时只提交已暂存的文件",
    "Auto pull interval (minutes)": "自动拉取间隔（分钟）",
    "Auto push interval (minutes)": "自动推送间隔（分钟）",
    "Auto-stash changes when rebasing": "变基时自动贮藏更改",
    Automatic: "自动",
    "Automatic routines are currently paused.": "自动任务当前已暂停。",
    "Automatically pull commits when Obsidian starts.":
        "Obsidian 启动时自动拉取提交。",
    "Automatically refresh source control view on file changes":
        "文件更改时自动刷新源代码管理视图",
    "Available placeholders: {{date}} (see below), {{hostname}} (see below), {{numFiles}} (number of changed files in the commit) and {{files}} (changed files in commit message).":
        "可用占位符：{{date}}（见下方）、{{hostname}}（见下方）、{{numFiles}}（本次提交中更改的文件数）和 {{files}}（写入提交说明的更改文件）。",
    "Available placeholders: {{date}} (see below), {{hostname}} (see below), {{numFiles}} (number of changed files in the commit) and {{files}} (changed files in commit message). Leave empty to require manual input on each commit.":
        "可用占位符：{{date}}（见下方）、{{hostname}}（见下方）、{{numFiles}}（本次提交中更改的文件数）和 {{files}}（写入提交说明的更改文件）。留空则每次提交都需要手动输入。",
    "Buy Me a Coffee at ko-fi.com": "在 ko-fi.com 请我喝咖啡",
    "By default (deactivated), each line only shows the newest commit where it was changed.":
        "默认（关闭）时，每一行只显示最近一次修改它的提交。",
    "CAUTION: Delete repository": "注意：删除仓库",
    "CAUTION: Discard all changes": "注意：丢弃全部更改",
    "CMD (⌘) + OPTION (⌥) + I": "CMD (⌘) + OPTION (⌥) + I",
    "CSS variables": "CSS 变量",
    "CTRL + SHIFT + I": "CTRL + SHIFT + I",
    "Can't find a valid git repository. Please create one via the given command or clone an existing repo.":
        "找不到有效的 Git 仓库。请使用相应命令创建一个，或克隆已有仓库。",
    Cancel: "取消",
    "Cannot find sh.exe at {path}. Please make sure Git is properly installed.":
        "在 {path} 找不到 sh.exe。请确认 Git 已正确安装。",
    "Cannot keep the base of a two-way conflict": "双方冲突无法保留共同基线",
    "Cannot pull because a merge is still in progress. Commit or abort it first.":
        "无法拉取，因为合并仍在进行。请先提交或中止合并。",
    "Cannot push while a merge is still in progress": "合并仍在进行时无法推送",
    "Cannot push. You have conflicts in {count} file":
        "无法推送。你有 {count} 个文件存在冲突",
    "Cannot push. You have conflicts in {count} files":
        "无法推送。你有 {count} 个文件存在冲突",
    "Cannot run git command. Trying to run: '{gitPath}' .":
        "无法运行 git 命令。尝试运行的是：'{gitPath}' 。",
    "Change Layout": "切换布局",
    Changes: "更改",
    "Checking out": "正在检出",
    "Checking out branch...": "正在检出分支…",
    "Choose “Keep ours” for your local text, “Keep theirs” for the incoming text, “Keep both”, or edit the block manually.":
        "本地内容选「保留我方」，传入内容选「保留对方」，也可以「保留双方」，或手动编辑该冲突块。",
    Clear: "清除",
    "Clone an existing remote repo": "克隆已有的远程仓库",
    "Cloned new repo.": "已克隆新仓库。",
    Cloning: "正在克隆",
    'Cloning new repo into "{dir}"': "正在把新仓库克隆到「{dir}」",
    "Close hunk": "关闭差异块",
    "Color for newest commits": "较新提交的颜色",
    "Color for oldest ({age} or older) commits":
        "较早提交（{age} 或更早）的颜色",
    Colored: "彩色",
    Commit: "提交",
    "Commit Message": "提交说明",
    "Commit aborted: No commit message provided":
        "已中止提交：没有填写提交说明",
    "Commit all changes": "提交全部更改",
    "Commit all changes and sync": "提交全部更改并同步",
    "Commit all changes with specific message": "使用指定说明提交全部更改",
    "Commit and sync changes every X minutes. Set to 0 (default) to disable. (See below setting for further configuration!)":
        "每隔 X 分钟提交并同步更改。设为 0（默认）即禁用。（更多配置见下方设置！）",
    "Commit author": "提交作者",
    "Commit changes every X minutes. Set to 0 (default) to disable. (See below setting for further configuration!)":
        "每隔 X 分钟提交更改。设为 0（默认）即禁用。（更多配置见下方设置！）",
    "Commit message on auto commit": "自动提交时的提交说明",
    "Commit message on auto commit-and-sync": "自动提交并同步时的提交说明",
    "Commit message on manual commit": "手动提交时的提交说明",
    "Commit message script": "提交说明脚本",
    "Commit staged": "提交已暂存的更改",
    "Commit staged and sync": "提交已暂存的更改并同步",
    "Commit staged with specific message": "使用指定说明提交已暂存的更改",
    "Commit with specific message": "使用指定说明提交",
    "Commit {count} staged file": "提交 {count} 个已暂存文件",
    "Commit {count} staged file and sync": "提交 {count} 个已暂存文件并同步",
    "Commit {count} staged files": "提交 {count} 个已暂存文件",
    "Commit {count} staged files and sync": "提交 {count} 个已暂存文件并同步",
    "Commit-and-sync": "提交并同步",
    "Commit-and-sync and then close Obsidian": "提交并同步，然后关闭 Obsidian",
    "Commit-and-sync with default settings means staging everything -> committing -> pulling -> pushing. Ideally this is a single action that you do regularly to keep your local and remote repository in sync.":
        "默认设置下，「提交并同步」会依次暂存全部内容、提交、拉取、推送。最好定期执行这一步，让本地和远程仓库保持同步。",
    "Commit-and-sync with specific message": "使用指定说明提交并同步",
    "Committed {count} file": "已提交 {count} 个文件",
    "Committed {count} files": "已提交 {count} 个文件",
    "Committing changes...": "正在提交更改…",
    Conflicts: "冲突",
    Copy: "复制",
    "Copy Debug Information": "复制调试信息",
    "Copy commit hash": "复制提交哈希",
    'Corresponds to the GIT_DIR environment variable. Relative paths are resolved from the custom base path, or the vault root when no base path is configured. Requires restart of Obsidian to take effect. Use "\\" instead of "/" on Windows.':
        '对应 GIT_DIR 环境变量。相对路径会从自定义基准路径解析；未配置基准路径时则从库根目录解析。需要重启 Obsidian 后生效。在 Windows 上请使用 "\\" 而不是 "/"。',
    "Could not parse remote url": "无法解析远程 URL",
    "Create new branch": "创建新分支",
    "Created new branch {branch}": "已创建新分支 {branch}",
    "Currently: {date}": "当前：{date}",
    Custom: "自定义",
    "Custom Git binary path": "自定义 Git 可执行文件路径",
    "Custom Git directory path (Instead of '.git')":
        "自定义 Git 目录路径（代替 '.git'）",
    "Custom authoring date format": "自定义编写日期格式",
    "Custom base path (Git repository path)": "自定义基准路径（Git 仓库路径）",
    Cut: "剪切",
    "DELETE ALL YOUR LOCAL CONFIG AND PLUGINS": "会删除你本地的全部配置和插件",
    "Date (default)": "日期（默认）",
    "Date and time": "日期和时间",
    "Debug information copied to clipboard. May contain sensitive information!":
        "调试信息已复制到剪贴板。其中可能包含敏感信息！",
    "Debugging and logging:\nYou can always see the logs of this and every other plugin by opening the console with":
        "调试与日志：\n你可以打开控制台，查看本插件以及其他所有插件的日志，快捷键是",
    "Decide how to integrate commits from your remote branch into your local branch.":
        "决定如何把远程分支上的提交整合进本地分支。",
    "Decide how to solve conflicts when pulling remote changes. This can be used to favor your local changes or the remote changes automatically.":
        "决定拉取远程更改发生冲突时如何处理。可以自动偏向保留本地更改或远程更改。",
    Delete: "删除",
    'Delete "{path}"': "删除「{path}」",
    "Delete all {files}": "删除全部 {files}",
    "Delete branch": "删除分支",
    'Delete files in "{path}"': "删除「{path}」中的文件",
    "Deleted branch {branch}": "已删除分支 {branch}",
    "Did not commit automatically because a merge is in progress. Commit it manually.":
        "因为合并仍在进行，所以没有自动提交。请手动提交。",
    "Did not commit, because you have conflicts in {count} file. Please resolve them and commit per command.":
        "没有提交，因为有 {count} 个文件存在冲突。请解决冲突后再用命令提交。",
    "Did not commit, because you have conflicts in {count} files. Please resolve them and commit per command.":
        "没有提交，因为有 {count} 个文件存在冲突。请解决冲突后再用命令提交。",
    "Diff View": "差异视图",
    "Diff view": "差异视图",
    "Diff view style": "差异视图样式",
    "Diff: {file}": "差异：{file}",
    "Diff: {file} {suffix}": "差异：{file} {suffix}",
    "Disable error notifications": "关闭错误通知",
    "Disable error notifications of any kind to minimize distraction (refer to status bar for updates).":
        "关闭所有错误通知以减少打扰（进度请看状态栏）。",
    "Disable informative notifications": "关闭提示通知",
    "Disable informative notifications for git operations to minimize distraction (refer to status bar for updates).":
        "关闭 Git 操作的提示通知以减少打扰（进度请看状态栏）。",
    "Disable on this device": "在此设备上禁用",
    Disabled: "已禁用",
    "Disables the plugin on this device. This setting is not synced.":
        "在此设备上禁用插件。此设置不会同步。",
    Discard: "丢弃",
    'Discard "{path}"': "丢弃「{path}」",
    "Discard all {files}": "丢弃全部 {files}",
    'Discard files in "{path}"': "丢弃「{path}」中的文件",
    "Discarded all changes in tracked files.": "已丢弃已跟踪文件中的全部更改。",
    "Discarded all files.": "已丢弃全部文件。",
    "Do not follow (default)": "不跟踪（默认）",
    "Do you really want to delete the repository (.git directory)? plugin action cannot be undone.":
        "确定要删除仓库（.git 目录）吗？此操作无法撤销。",
    "Does your remote repo contain a {dir} directory at the root?":
        "远程仓库的根目录是否包含 {dir} 目录？",
    "Don't show notifications when there are no changes to commit or push.":
        "没有可提交或推送的更改时不显示通知。",
    Donate: "捐赠",
    "Edit .gitignore": "编辑 .gitignore",
    "Edit remotes": "编辑远程",
    "Enable to use one interval for commit and another for sync.":
        "启用后，提交和同步使用各自的时间间隔。",
    Enabled: "已启用",
    "Enter a response to the message.": "请输入对该提示的回复。",
    "Enter directory for clone. It needs to be empty or not existent.":
        "输入克隆目标目录。该目录必须为空或不存在。",
    "Enter remote URL": "输入远程 URL",
    "Error checking LFS status: {error}": "检查 LFS 状态时出错：{error}",
    "Failed on initialization!": "初始化失败！",
    "Failed to get current branch name": "获取当前分支名失败",
    "Failed to get remote url": "获取远程 URL 失败",
    "Failed to get remote url of submodule": "获取子模块的远程 URL 失败",
    "Feature guide and quick examples": "功能指南和快速示例",
    Fetch: "获取",
    "Fetched from remote": "已从远程获取",
    Fetching: "正在获取",
    "Fetching from remote...": "正在从远程获取…",
    "Fetching remote branches": "正在获取远程分支",
    "File at commit": "某次提交中的文件",
    "File menu integration": "文件菜单集成",
    "File not found: {file}": "找不到文件：{file}",
    "File not found: {path}": "找不到文件：{path}",
    "Finish the merge": "完成合并",
    "Finished pull": "拉取完成",
    "First name": "名",
    "Follow movement and copies across files and commits":
        "跟踪文件与提交之间的移动和复制",
    "Follow within all commits (maybe slow)": "在所有提交中跟踪（可能较慢）",
    "Follow within same commit": "在同一提交中跟踪",
    "Format string": "格式字符串",
    Full: "完整",
    "Full name": "全名",
    "GIT_DIR=/path/to/git/dir": "GIT_DIR=/path/to/git/dir",
    "Git View": "Git 视图",
    "Git author name and email are not set. Please set both fields in the settings.":
        "尚未设置 Git 作者名和邮箱。请在设置中填写这两项。",
    "Git could not combine some parts automatically. Open each conflicted file and review every highlighted conflict block.":
        "Git 无法自动合并某些部分。请打开每个冲突文件，检查所有高亮的冲突块。",
    "Git diff of the current editor": "当前编辑器的 Git 差异",
    "Git is combining the version in your vault with changes from another version. The merge must be committed before Obsidian Git can push or resume automatic commits.":
        "Git 正在把库中的版本与另一版本的更改合并。必须先提交这次合并，Obsidian Git 才能推送或恢复自动提交。",
    "Git is not ready. When all settings are correct you can configure commit-sync, etc.":
        "Git 尚未就绪。所有设置正确后，才能配置提交同步等选项。",
    "Git is offline": "Git 处于离线状态",
    "Git is ready": "Git 已就绪",
    "Git operation in progress...": "Git 操作进行中…",
    "Git: Add to .gitignore": "Git：加入 .gitignore",
    "Git: Going into offline mode. Future network errors will no longer be displayed.":
        "Git：进入离线模式。之后的网络错误将不再显示。",
    "Git: Stage": "Git：暂存",
    "Git: Unstage": "Git：取消暂存",
    "Git: {message}": "Git：{message}",
    "Go to next hunk": "转到下一个差异块",
    "Go to previous hunk": "转到上一个差异块",
    "Got it": "知道了",
    Hide: "隐藏",
    "Hide everything, to only show the age-colored sidebar.":
        "隐藏全部文字，只显示按时间着色的侧栏。",
    "Hide notifications for no changes": "没有更改时隐藏通知",
    History: "历史记录",
    "History view": "历史视图",
    "Hunk commands": "差异块命令",
    "Hunk management": "差异块管理",
    "Hunks are sections of grouped line changes right in your editor.":
        "差异块是编辑器里成组的行更改。",
    "If and how the author is displayed": "是否以及如何显示作者",
    "If and how the date and time of authoring the line is displayed":
        "是否以及如何显示该行的编写日期和时间",
    "If turned on, only staged files are committed on commit-and-sync. If turned off, all changed files are committed.":
        "开启后，提交并同步时只提交已暂存的文件。关闭后，会提交所有已更改的文件。",
    "If turned on, only staged files are committed on commit. If turned off, all changed files are committed.":
        "开启后，提交时只提交已暂存的文件。关闭后，会提交所有已更改的文件。",
    "If turned on, sets last auto commit timestamp to the latest commit timestamp. This reduces the frequency of auto commit when doing manual commits.":
        "开启后，会把上次自动提交的时间设为最近一次提交的时间。这样在手动提交时可以降低自动提交的频率。",
    "If turned on, sets last auto commit-and-sync timestamp to the latest commit timestamp. This reduces the frequency of auto commit-and-sync when doing manual commits.":
        "开启后，会把上次自动提交并同步的时间设为最近一次提交的时间。这样在手动提交时可以降低自动提交并同步的频率。",
    "If you don't care about purely-whitespace changes (e.g. list nesting / quote indentation changes), then activating this will provide more meaningful change detection.":
        "如果你不关心纯空白更改（例如列表缩进或引用缩进），开启此项可以让变更检测更有意义。",
    "If you like this Plugin, consider donating to support continued development.":
        "如果这个插件对你有帮助，可以考虑捐赠以支持后续开发。",
    "Ignore whitespace and newlines in changes": "在更改中忽略空白和换行",
    "Index: {status}": "暂存区：{status}",
    "Initialize a new repo": "初始化新仓库",
    "Initialized new repo": "已初始化新仓库",
    "Initializing clone": "正在初始化克隆",
    "Initializing fetch": "正在初始化获取",
    "Initializing pull": "正在初始化拉取",
    "Initializing push": "正在初始化推送",
    Initials: "首字母",
    "Initials (default)": "首字母（默认）",
    "Interface language for this plugin. English is the default. Chinese can be selected here.":
        "本插件的界面语言。默认为英文，可在此切换为中文。",
    "Invalid depth. Aborting clone.": "深度无效。正在中止克隆。",
    "It is highly recommended to use ": "强烈建议使用",
    "It seems like you are not using GitHub": "看起来你没有在使用 GitHub",
    "It uses ": "它使用 ",
    "Keep all base": "全部保留基线",
    "Keep all ours": "全部保留我方",
    "Keep all theirs": "全部保留对方",
    "Keep base": "保留基线",
    "Keep both": "保留双方",
    "Keep ours": "保留我方",
    "Keep theirs": "保留对方",
    Language: "语言",
    "Last Commit: {when}": "上次提交：{when}",
    "Last name": "姓",
    "Line author information": "行作者信息",
    "List changed files": "列出已更改的文件",
    "List filenames affected by commit in the commit body":
        "在提交正文中列出受影响的文件名",
    "List of available CSS variables in Obsidian":
        "Obsidian 可用的 CSS 变量列表",
    "Mark resolved": "标记为已解决",
    "Maximum time in milliseconds to compute a detailed split diff. Higher values improve accuracy for large files with many changes but may reduce responsiveness. Read-only diffs use ten times this value.":
        "计算详细分栏差异的最长时间（毫秒）。数值越大，对改动很多的大文件越准确，但可能降低响应速度。只读差异会使用十倍于此的时间。",
    Merge: "合并",
    "Merge in progress": "正在合并",
    "Merge in progress — select for help": "正在合并 — 点此查看帮助",
    "Merge in progress. Select for help resolving and finishing the merge.":
        "正在合并。点此查看如何解决冲突并完成合并。",
    "Merge in progress. Select the merge icon for help resolving and finishing it.":
        "正在合并。点合并图标可查看如何解决冲突并完成合并。",
    "Merge strategy": "合并策略",
    "Merge strategy on conflicts": "冲突时的合并策略",
    "Milliseconds to wait after file change before refreshing the Source Control View.":
        "文件更改后，等待多少毫秒再刷新源代码管理视图。",
    Miscellaneous: "杂项",
    "Moment.js documentation": "Moment.js 文档",
    Monochrome: "单色",
    "More commit actions": "更多提交操作",
    "Most of the time you want to push after committing. Turning this off turns a commit-and-sync action into commit and pull only. It will still be called commit-and-sync.":
        "多数情况下，提交后你会希望推送。关闭此项后，「提交并同步」会变成只提交并拉取，名称仍叫提交并同步。",
    "Most of the time you want to push after committing. Turning this off turns a commit-and-sync action into commit only. It will still be called commit-and-sync.":
        "多数情况下，提交后你会希望推送。关闭此项后，「提交并同步」会变成只提交，名称仍叫提交并同步。",
    "My local (default)": "我的本地时区（默认）",
    "Natural language": "自然语言",
    "No changes to commit": "没有可提交的更改",
    "No commits to push": "没有可推送的提交",
    "No conflicts left": "没有剩余冲突",
    "No current branch found. Cannot pull.": "找不到当前分支。无法拉取。",
    "No current branch found. Cannot push.": "找不到当前分支。无法推送。",
    "No repository found": "找不到仓库",
    "No upstream branch is set. Please select one.":
        "尚未设置上游分支。请选择一个。",
    "None (git default)": "无（Git 默认）",
    "Not supported files will be opened by default app!":
        "不支持的文件将用默认应用打开！",
    "Nothing staged — stage changes before committing":
        "没有已暂存的内容 — 请先暂存再提交",
    "Nothing staged. Stage changes first or use Commit all changes.":
        "没有已暂存的内容。请先暂存，或使用「提交全部更改」。",
    "Obsidian must be restarted for the changes to take affect.":
        "必须重启 Obsidian，更改才会生效。",
    "ObsidianGit: Base path does not exist": "ObsidianGit：基准路径不存在",
    "Offline: Last Commit: {when}": "离线：上次提交：{when}",
    "Oldest age in coloring": "着色的最长时间",
    "On commit-and-sync, pull commits as well. Turning this off turns a commit-and-sync action into commit and push only.":
        "提交并同步时也拉取提交。关闭此项后，「提交并同步」会变成只提交并推送。",
    "On commit-and-sync, pull commits as well. Turning this off turns a commit-and-sync action into commit only.":
        "提交并同步时也拉取提交。关闭此项后，「提交并同步」会变成只提交。",
    "On commit-and-sync, squash all local unpushed commits into a single commit right before pushing. Keeps the remote history clean when committing often. Only unpushed commits are rewritten, so no force-push is needed.":
        "提交并同步时，在推送前把本地尚未推送的提交压缩成一个提交。经常提交时可以让远程历史更干净。只会改写未推送的提交，因此不需要强制推送。",
    "On slower machines this may cause lags. If so, just disable this option.":
        "在较慢的设备上这可能导致卡顿。如果出现卡顿，请关闭此选项。",
    "Only available on desktop currently.": "目前仅桌面端可用。",
    "Open File": "打开文件",
    "Open Git source control": "打开 Git 源代码管理",
    "Open diff view": "打开差异视图",
    "Open file at this commit": "打开该提交中的文件",
    "Open file history on GitHub": "在 GitHub 上打开文件历史",
    "Open file on GitHub": "在 GitHub 上打开文件",
    "Open history view": "打开历史视图",
    "Open in default app": "用默认应用打开",
    "Open source control view": "打开源代码管理视图",
    "Other sync service (Only updates the HEAD without touching the working directory)":
        "其他同步服务（只更新 HEAD，不改动工作区）",
    "Our changes": "我方更改",
    "Password/Personal access token": "密码 / 个人访问令牌",
    Paste: "粘贴",
    "Paste as plain text": "粘贴为纯文本",
    "Pause/Resume automatic routines": "暂停/恢复自动任务",
    "Paused automatic routines.": "已暂停自动任务。",
    "Please restart Obsidian": "请重启 Obsidian",
    Preview: "预览",
    "Preview commit message": "预览提交说明",
    "Preview hunk": "预览差异块",
    Pull: "拉取",
    "Pull changes every X minutes. Set to 0 (default) to disable.":
        "每隔 X 分钟拉取更改。设为 0（默认）即禁用。",
    "Pull failed ({method}): {error}": "拉取失败（{method}）：{error}",
    "Pull on commit-and-sync": "提交并同步时拉取",
    "Pull on startup": "启动时拉取",
    "Pull: Everything is up-to-date": "拉取：已经是最新",
    "Pulled {count} file from remote": "已从远程拉取 {count} 个文件",
    "Pulled {count} files from remote": "已从远程拉取 {count} 个文件",
    Pulling: "正在拉取",
    "Pulling changes...": "正在拉取更改…",
    Push: "推送",
    "Push commits every X minutes. Set to 0 (default) to disable.":
        "每隔 X 分钟推送提交。设为 0（默认）即禁用。",
    "Push on commit-and-sync": "提交并同步时推送",
    "Pushed to remote": "已推送到远程",
    "Pushed {count} file to remote": "已向远程推送 {count} 个文件",
    "Pushed {count} files to remote": "已向远程推送 {count} 个文件",
    Pushing: "正在推送",
    "Pushing changes...": "正在推送更改…",
    "Raw command": "原始命令",
    Rebase: "变基",
    "Recently Pulled Files": "最近拉取的文件",
    Refresh: "刷新",
    Reload: "重新加载",
    "Reload with new environment variables": "使用新的环境变量重新加载",
    "Remote branch is not configured": "尚未配置远程分支",
    "Remove remote": "移除远程",
    "Removing previously added environment variables will not take effect until Obsidian is restarted.":
        "移除先前添加的环境变量后，需要重启 Obsidian 才会生效。",
    "Repeat this for every file in the Conflicts section.":
        "对「冲突」区域中的每个文件重复此操作。",
    "Requires the commit interval not to be 0.\n                        If turned on, do auto commit every {interval} after stopping file edits.\n                        This also prevents auto commit while editing a file. If turned off, it's independent from the last file edit.":
        "要求提交间隔不为 0。\n                        开启后，会在停止编辑文件 {interval} 后再自动提交。\n                        这也会避免在编辑文件时自动提交。关闭后，则与最后一次编辑无关。",
    "Requires the commit-and-sync interval not to be 0.\n                        If turned on, do auto commit-and-sync every {interval} after stopping file edits.\n                        This also prevents auto commit-and-sync while editing a file. If turned off, it's independent from the last file edit.":
        "要求提交并同步的间隔不为 0。\n                        开启后，会在停止编辑文件 {interval} 后再自动提交并同步。\n                        这也会避免在编辑文件时自动提交并同步。关闭后，则与最后一次编辑无关。",
    "Reset hunk": "还原差异块",
    "Resolve conflicts and commit manually": "请解决冲突并手动提交",
    "Resolve conflicts before committing": "请先解决冲突再提交",
    "Resolve the conflicts": "解决冲突",
    "Resumed automatic routines.": "已恢复自动任务。",
    "Running '{command}'...": "正在运行 '{command}'…",
    Save: "保存",
    "See: ": "参见：",
    "Select a remote": "选择远程",
    "Select all": "全选",
    "Select branch to checkout": "选择要检出的分支",
    "Select or create a new remote branch by typing its name and selecting it":
        "输入名称并选择，以选用或新建远程分支",
    "Select or create a new remote by typing its name and selecting it":
        "输入名称并选择，以选用或新建远程",
    'Set the style for the diff view. Note that the actual diff in "Split" mode is not generated by Git, but the editor itself instead so it may differ from the diff generated by Git. One advantage of this is that you can edit the text in that view.':
        "设置差异视图的样式。注意：「分栏」模式下的差异不是 Git 生成的，而是编辑器自己生成的，因此可能与 Git 的差异不同。好处是你可以在该视图中编辑文本。",
    'Set to default: "{message}"': "恢复默认：「{message}」",
    "Set upstream branch": "设置上游分支",
    "Set upstream branch to {branch}": "已将上游分支设为 {branch}",
    "Show Author": "显示作者",
    "Show Date": "显示日期",
    "Show author {option}": "显示作者{option}",
    "Show branch status bar": "显示分支状态栏",
    "Show commit authoring information next to each line":
        "在每一行旁边显示提交编写信息",
    "Show commit hash": "显示提交哈希",
    "Show in system explorer": "在系统文件管理器中显示",
    "Show status bar": "显示状态栏",
    "Show the author of the commit in the history view.":
        "在历史视图中显示提交作者。",
    "Show the count of modified files in the status bar":
        "在状态栏显示已修改文件的数量",
    "Show the date of the commit in the history view. The {{date}} placeholder format is used to display the date.":
        "在历史视图中显示提交日期。日期使用 {{date}} 占位符的格式。",
    "Show {option}": "显示{option}",
    "Show {option} date": "显示{option}日期",
    Signs: "标记",
    "Source Control": "源代码管理",
    "Source control view": "源代码管理视图",
    "Source control view refresh interval": "源代码管理视图刷新间隔",
    "Specify custom commit message on auto commit":
        "为自动提交指定自定义提交说明",
    "Specify custom commit message on auto commit-and-sync":
        "为自动提交并同步指定自定义提交说明",
    "Specify custom hostname for every device. Defaults to the OS hostname if not set on desktop.":
        "为每台设备指定自定义主机名。桌面端未设置时默认使用操作系统主机名。",
    "Specify depth of clone. Leave empty for full clone.":
        "指定克隆深度。留空则完整克隆。",
    "Specify the path to the Git binary/executable. Git should already be in your PATH. Should only be necessary for a custom Git installation.":
        "指定 Git 可执行文件的路径。Git 通常已在 PATH 中。只有自定义安装时才需要填写。",
    "Specify your password/personal access token": "请输入密码或个人访问令牌",
    "Specify your username": "请输入用户名",
    Split: "分栏",
    "Split diff view timeout": "分栏差异视图超时",
    "Split timers for automatic commit and sync":
        "为自动提交和同步使用分开的计时器",
    "Squash commits before push": "推送前压缩提交",
    Stage: "暂存",
    "Stage all": "全部暂存",
    "Stage all and commit": "全部暂存并提交",
    "Stage all changes when nothing is staged": "没有暂存内容时暂存全部更改",
    "Stage and commit all {count} changed file":
        "暂存并提交全部 {count} 个已更改文件",
    "Stage and commit all {count} changed file and sync":
        "暂存并提交全部 {count} 个已更改文件，然后同步",
    "Stage and commit all {count} changed files":
        "暂存并提交全部 {count} 个已更改文件",
    "Stage and commit all {count} changed files and sync":
        "暂存并提交全部 {count} 个已更改文件，然后同步",
    "Stage current file": "暂存当前文件",
    "Stage hunk": "暂存差异块",
    "Staged Changes": "已暂存的更改",
    "Status bar with summary of line changes": "用状态栏汇总行更改",
    "Stdout from commit message script is empty. Using default message.":
        "提交说明脚本的标准输出为空。将使用默认说明。",
    "Submodule recurse checkout/switch": "子模块递归检出/切换",
    "Successfully deleted repository. Reloading plugin...":
        "已成功删除仓库。正在重新加载插件…",
    Support: "支持",
    "Supports 'rgb(r,g,b)', 'hsl(h,s,l)', hex (#) and named colors (e.g. 'black', 'purple'). Color preview: ":
        "支持 'rgb(r,g,b)'、'hsl(h,s,l)'、十六进制（#）和颜色名（例如 'black'、'purple'）。颜色预览：",
    "Switch branch": "切换分支",
    "Switch to remote branch": "切换到远程分支",
    "Switched to {branch}": "已切换到 {branch}",
    "Sync (no changes to commit)": "同步（没有可提交的更改）",
    "Sync failed ({method}): {error}": "同步失败（{method}）：{error}",
    "Temporarily stash local changes before rebasing and restore them afterward. Restoring changes may produce conflicts.":
        "变基前临时贮藏本地更改，完成后再恢复。恢复时可能会产生冲突。",
    "Text color": "文字颜色",
    "The CSS color of the gutter text.": "边栏文字的 CSS 颜色。",
    "The merge is still active until you commit the staged changes.":
        "在你提交已暂存的更改之前，合并仍然有效。",
    'The oldest age in the line author coloring. Everything older will have the same color.\nSmallest valid age is "1d". Currently: invalid!':
        '行作者着色所使用的最长时间。更早的内容会使用同一种颜色。\n最小有效值为 "1d"。当前：无效！',
    'The oldest age in the line author coloring. Everything older will have the same color.\nSmallest valid age is "1d". Currently: {days} days':
        '行作者着色所使用的最长时间。更早的内容会使用同一种颜色。\n最小有效值为 "1d"。当前：{days} 天',
    "The time-zone in which the authoring date should be shown.\nEither your local time-zone (default),\nthe author's time-zone during commit creation or\n":
        "编写日期要按哪个时区显示。\n可以是你的本地时区（默认）、\n作者创建提交时的时区，或\n",
    "Their changes": "对方更改",
    "These settings usually don't need to be changed, but may be required for special setups.":
        "这些设置通常不用改，特殊环境可能才需要。",
    "This allows you to see your changes right in your editor via colored markers and stage/reset/preview individual hunks.":
        "这样你就可以在编辑器里用彩色标记看到更改，并暂存、还原或预览单个差异块。",
    "This branch isn't merged into HEAD. Force delete?":
        "此分支尚未合并到 HEAD。强制删除？",
    "This takes longer: Getting status": "这一步会久一些：正在获取状态",
    "To avoid conflicts, the local {dir} directory needs to be deleted.":
        "为避免冲突，需要删除本地的 {dir} 目录。",
    "Toggle line author information": "切换行作者信息",
    "Too many changes to display": "更改过多，无法显示",
    "Too many files to list": "文件过多，无法列出",
    "Type in your password. You won't be able to see it again.":
        "请输入密码。之后将无法再次查看。",
    "Type your message and select optional the version with the added date.":
        "输入说明，也可选择带日期的版本。",
    "UTC+0000/Z": "UTC+0000/Z",
    "UTC±00:00": "UTC±00:00",
    Unified: "统一",
    Unstage: "取消暂存",
    "Unstage all": "全部取消暂存",
    "Unstage current file": "取消暂存当前文件",
    "Unstage hunk": "取消暂存差异块",
    "Unsupported status matrix row: {statusKey}":
        "不支持的状态矩阵行：{statusKey}",
    "Untracked | {path}": "未跟踪 | {path}",
    "Update submodules": "更新子模块",
    "Upstream branch will be created on first push. Skipping pull.\nUse set upstream branch command to set it manually if desired.":
        "上游分支会在首次推送时创建。已跳过拉取。\n如需手动设置，请使用「设置上游分支」命令。",
    "Use Git configuration": "使用 Git 配置",
    "Use each line for a new environment variable in the format KEY=VALUE .":
        "每行写一个环境变量，格式为 KEY=VALUE。",
    "Use each line for one path": "每行写一个路径",
    "Username on your git server. E.g. your username on GitHub":
        "Git 服务器上的用户名。例如你的 GitHub 用户名",
    "Vault Root": "库根目录",
    "When the file's conflict count reaches zero, select the plus icon next to it to mark it as resolved.":
        "当文件的冲突数变为 0 时，点击旁边的加号将其标记为已解决。",
    "When using Commit with nothing staged, stage and commit all changes. When disabled, changes must be staged first. Commit all changes and Commit-and-sync are unaffected.":
        "使用「提交」且没有任何暂存内容时，先暂存再提交全部更改。关闭后，必须先暂存才能提交。「提交全部更改」和「提交并同步」不受影响。",
    "Whenever a checkout happens on the root repository, recurse the checkout on the submodules (if the branches exist).":
        "根仓库检出时，如果子模块中存在对应分支，也递归检出子模块。",
    "Whitespace and newlines are interpreted as part of the document and in changes by default (hence not ignored). This makes the last line being shown as 'changed' when a new subsequent line is added, even if the previously last line's text is the same.":
        "默认会把空白和换行视为文档及更改的一部分（也就是不忽略）。因此在后面新增一行时，即使原来最后一行的文字没变，它也会显示为「已更改」。",
    "With ": "选择「",
    Working: "正在处理",
    "Working Dir: {status} ": "工作区：{status} ",
    "YYYY-MM-DD HH:mm": "YYYY-MM-DD HH:mm",
    "You have conflicts in {count} file": "有 {count} 个文件存在冲突",
    "You have conflicts in {count} files": "有 {count} 个文件存在冲突",
    "You will get a pop up to specify your message.":
        "会弹出窗口让你填写说明。",
    "abcdef Author Name {date}": "abcdef 作者名 {date}",
    "all commits": "所有提交",
    custom: "自定义",
    date: "日期",
    datetime: "日期时间",
    "directory/directory-with-git-repo": "directory/directory-with-git-repo",
    file: "文件",
    files: "文件",
    "first name": "名",
    full: "全名",
    git: "git",
    "git-blame": "git-blame",
    hide: "隐藏",
    initials: "首字母",
    "invalid color": "无效颜色",
    "isomorphic-git returned invalid unmerged paths":
        "isomorphic-git 返回了无效的未合并路径",
    "isomorphic-git walk returned a non-array result":
        "isomorphic-git walk 返回了非数组结果",
    "last name": "姓",
    "natural language": "自然语言",
    "push origin master": "push origin master",
    "readlink of ({path}) is not implemented.": "尚未实现 readlink（{path}）。",
    "same commit": "同一提交",
    "symlink of ({path}) is not implemented.": "尚未实现 symlink（{path}）。",
    "the originating": "最初来源",
    "tracked file": "已跟踪文件",
    "tracked files": "已跟踪文件",
    "untracked file": "未跟踪文件",
    "untracked files": "未跟踪文件",
    "{action} progress:": "{action}进度：",
    "{action} progress: {loaded}": "{action}进度：{loaded}",
    "{action} progress: {loaded} of {total}":
        "{action}进度：{loaded} / {total}",
    "{action} progress: {phase}:": "{action}进度：{phase}：",
    "{action} progress: {phase}: {loaded}": "{action}进度：{phase}：{loaded}",
    "{action} progress: {phase}: {loaded} of {total}":
        "{action}进度：{phase}：{loaded} / {total}",
    "{count} conflict in file": "文件中有 {count} 处冲突",
    "{count} conflict(s) left": "还剩 {count} 处冲突",
    "{count} conflicts in file": "文件中有 {count} 处冲突",
    "{count} {noun}": "{count} 个{noun}",
    "{file} ({ref})": "{file}（{ref}）",
    "{{date}} placeholder format": "{{date}} 占位符格式",
    "{{hostname}} placeholder replacement": "{{hostname}} 占位符替换值",
};
