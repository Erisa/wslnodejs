var args = process.argv.map(arg => {
    let result = arg.replace(/\\/g, '/')
        .replace(/([A-Za-z]):/, '/mnt/$1')
        .replace(/\/mnt\/\w/, s => s.toLowerCase())
        .replace(/'/, "\\'");

    if (/\/mnt\//.test(result)) {
        result = `"${result}"`;
    }
    return result;
});

const { spawnSync, execSync } = require('child_process');

execSync(`wsl ${args[2]} ${args.slice(3).join(' ')}`, { encoding : 'utf-8', stdio : 'inherit' });
