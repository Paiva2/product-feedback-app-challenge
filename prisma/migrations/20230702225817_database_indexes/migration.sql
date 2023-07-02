-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_postsId_fkey`;

-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_postsId_fkey`;
