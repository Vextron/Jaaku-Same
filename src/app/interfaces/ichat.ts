export interface Ichat {
    id: String;
    displayName: String;
    email: String;
    type: 'human' | 'joined';
    message: String;
    createdAt: String;
    isMe: Boolean;
}
