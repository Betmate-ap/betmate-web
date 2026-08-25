import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { getAvatarColor, getInitials } from "@/lib/avatar-color";
import { cn } from "@/lib/utils";

const sizeClass = {
  sm: { avatar: "h-8 w-8", text: "text-xs" },
  md: { avatar: "h-10 w-10", text: "text-sm" },
  lg: { avatar: "h-12 w-12", text: "text-base" },
  xl: { avatar: "h-14 w-14", text: "text-lg" },
} as const;

interface UserAvatarProps {
  userId: string;
  name: string;
  src?: string;
  size?: keyof typeof sizeClass;
  rank?: 1 | 2 | 3;
  className?: string;
}

function UserAvatar({ userId, name, src, size = "md", rank, className }: UserAvatarProps) {
  const { avatar, text } = sizeClass[size];

  const avatarEl = (
    <Avatar className={cn(avatar, rank === 1 && "ring-2 ring-gold/60", className)}>
      {src && <AvatarImage src={src} alt={name} />}
      <AvatarFallback
        className={cn("font-semibold text-white", text)}
        style={{ background: getAvatarColor(userId) }}
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );

  if (rank === undefined) return avatarEl;

  return (
    <div className="relative inline-flex">
      {avatarEl}
      {rank === 1 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent shadow-sm">
          <Trophy className="h-3 w-3 text-white" />
        </span>
      )}
    </div>
  );
}

interface AvatarDuoProps {
  challenger: UserAvatarProps;
  challengee: UserAvatarProps;
  size?: keyof typeof sizeClass;
}

function AvatarDuo({ challenger, challengee, size = "sm" }: AvatarDuoProps) {
  return (
    <div className="flex items-center gap-2">
      <UserAvatar {...challenger} size={size} />
      <span className="text-xs font-medium text-muted-foreground">vs</span>
      <UserAvatar {...challengee} size={size} />
    </div>
  );
}

interface AvatarStackProps {
  users: Pick<UserAvatarProps, "userId" | "name" | "src">[];
  max?: number;
  size?: keyof typeof sizeClass;
}

function AvatarStack({ users, max = 3, size = "sm" }: AvatarStackProps) {
  const { avatar } = sizeClass[size];
  const visible = users.slice(0, max);
  const extra = users.length - max;

  return (
    <div className="flex items-center">
      {visible.map((user, i) => (
        <div
          key={user.userId}
          className={cn("rounded-full ring-2 ring-background", i > 0 && "-ml-2")}
        >
          <UserAvatar {...user} size={size} />
        </div>
      ))}
      {extra > 0 && (
        <div
          className={cn(
            avatar,
            "-ml-2 rounded-full ring-2 ring-background bg-muted",
            "flex items-center justify-center text-xs font-semibold text-muted-foreground"
          )}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}

export { UserAvatar, AvatarDuo, AvatarStack };
