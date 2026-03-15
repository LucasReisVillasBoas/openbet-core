
    export type RemoteKeys = 'sportsbook/SportsbookPage';
    type PackageType<T> = T extends 'sportsbook/SportsbookPage' ? typeof import('sportsbook/SportsbookPage') :any;