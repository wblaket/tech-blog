const articles = [
{
        name: 'how-to-optimize-windows',
        title: 'How to Optimize Your Windows 10 Machine',
        subject: 'windows',
        author: 'Joe Smith',
        date: '2-30-21',
        upvotes: 0,
        content: [
            `Looking to dust-off your older Windows computer and make things run a bit smoother? Today
            we're going to look at five great ways you can optimize your windows machine.`,

            `1. Run Disk Clean-Up`,
            `Disk Clean-up is a built-in tool that comes with your installation of Windows.
            You can get to it by searching for "Disk Clean-up" in the Windows search bar.
            This handy tool will scan your hard-drive for those pesky extra files in the background
            of your computer that you don't need. It will even tell you how much disk space you'll get back -
            you could potentially restore several GB's worth of storage!`,

            `2. Remove Start Up Items`,
            `Notice that your computer is booting up slowly? It could be because you have too many
            programs that are instructed to automatically start when your computer turns on. If you launch
            Task Manager and click the 'Start-Up' tab and see a list of programs that are set to start when you log in.
            It will even tell you if it has a Low, Medium, or High impact on your computer's start-up performance.
            If there's anything you don't need to start automatically, go ahead and right click to disable. You should notice
            better performance.`,
            `3. Uninstall Unnessiary Programs`,
            `As the years go on it's easy to accumiliate many programs on your computer and forget about them later.
            You will want to make a habit out of regularly taking inventory of your programs and uninstalling the ones
            you no longer need. You can quickly do this by going to Apps & Features and uninstall any programs that may be
            taking up too much space on your device.`,
        ],
        comments: ['windows', 'laptop', 'desktop']

    },     {
        name: 'top-three-linux-commands',
        title: 'Top 3 Linux Commands Everyone Should know',
        subject: 'linux',
        author: 'Draco Fitz',
        date:'03-20-21',
        upvotes: 0,
        content: [
            `Learning Linux command line for the first time can be a daunting task, but we have you covered.
            Here are some very basic commands that are essential to start learning Linux`,
            `1. cd`,
            `Standing for "Change Directory", this command will help you navigate the file structure of your computer.
            Simply type in "cd" followed by the folder path you want to navigate to. Typing in "cd" by itself will take you to
            your home directory. There are some variations, for example: "cd .." will move you up one folder.`,
            `2. ls`,
            `This basic command will list the files in the current folder you are in. Typing in only "ls" will only give you
            the file and extension. You can add "-l" to show a more detailed overview of the file's permissions, size, etc.`,
            `3. mkdir`,
            `The make directory command is fairly self-explanitory. This will create a new sub-folder in whichever folder you are in. You can
            add "-P" to the command to add any additional parent folders to the subfolder that do not already exist.`,
        ],
        comments: ['linux', 'ubuntu', 'linux mint', 'fedora']
    },

    {
        name: 'protecting-your-privacy',
        title: 'Protecting Your Privacy: How You Can Take Back Control',
        subject: 'security',
        author: 'Blake Tharp',
        date:'04-04-21',
        upvotes: 0,
        content: [
            `In our current digital age, it's easy to lose track of our private data. Here are some quick tips
            on how you can start taking back ownership of your virtual life.`,
            `1. Switch Search Engines`,
            `Duck Duck Go is a fantastic search engine for privacy and it will even block external cookies/trackers from websites like Facebook while you browse.
            While the search engine is not as robust as Google, you can exect to browse worry free of where your data is going. `,
            `2. Install Privacy Browser Extension`,
            `Depending on which browser you're using, whether it's Firefox or Google Chrome, you can find a number of different browser extensions
            in their respective add-in stores. Adblockers such as uBlock or Privacy Badger are great options for safe browsing. Duck Duck Go even makes their own extension for
            privacy.`,
            `3. Review App Permissions on Social Media`,
            `When you use apps and games on social media websites like Facebook you often grant permission to some of your personal data. It's important to
            periodically take stock of which apps you are still using and revoking permission to the ones you aren't.`
        ],
        comments: ['linux', 'ubuntu', 'linux mint', 'fedora']
    },
];

export default articles;
