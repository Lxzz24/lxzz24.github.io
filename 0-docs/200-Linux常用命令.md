#

## Linux 创建新用户并赋予管理员权限

1.创建用户：

这里创建的用户名为 xxx：

```
sudo adduser xxx
```

删除用户：

```
sudo userdel -r xxx
```

查看账户：

```
cat /etc/group
```

2.管理员登陆：

```
sudo -i
```

(账号前缀会变成 root )

3.设置管理员：

输入：

```
sudo vim /etc/sudoers
```

按 i 输入

在 `root ALL=(ALL) ALL` 下一行输入：

```
xxx  ALL=(ALL)   ALL
```

免密进入：

```
xxx  ALL=(ALL)   NOPASSWD：ALL
```

按 `esc` ，输入 `:wq!` 保存退出

4.避免环境变量失效

修改 `/etc/sudoers` 文件

将 `Defaults env_reset` 改为 `Defaults !env_reset`

进入 `bashrc` 文件的编辑：

```
vim.bashrc
```

5.输入：

```
#sudo set
alias sudo='sudo env PATH=$PATH
```



# vsftpd


```
# 是否允许匿名登录 FTP 服务器，默认设置为 YES 允许
# 用户可使用用户名 ftp 或 anonymous 进行 ftp 登录，口令为用户的 E-mail 地址。
# 如不允许匿名访问则设置为 NO
anonymous_enable=YES

# 是否允许本地用户 (即 linux 系统中的用户帐号) 登录 FTP 服务器，默认设置为 YES 允许
# 本地用户登录后会进入用户主目录，而匿名用户登录后进入匿名用户的下载目录 /var/ftp/pub
# 若只允许匿名用户访问，前面加上 # 注释掉即可阻止本地用户访问 FTP 服务器
local_enable=YES

# 是否允许本地用户对 FTP 服务器文件具有写权限，默认设置为 YES 允许
write_enable=YES

# 掩码，本地用户默认掩码为 077
# 你可以设置本地用户的文件掩码为缺省 022，也可根据个人喜好将其设置为其他值
#local_umask=022

# 是否允许匿名用户上传文件，须将全局的 write_enable=YES。默认为 YES
#anon_upload_enable=YES

# 是否允许匿名用户创建新文件夹
#anon_mkdir_write_enable=YES

# 是否激活目录欢迎信息功能
# 当用户用 CMD 模式首次访问服务器上某个目录时，FTP 服务器将显示欢迎信息
# 默认情况下，欢迎信息是通过该目录下的 .message 文件获得的
# 此文件保存自定义的欢迎信息，由用户自己建立
#dirmessage_enable=YES

# 是否让系统自动维护上传和下载的日志文件
# 默认情况该日志文件为 /var/log/vsftpd.log , 也可以通过下面的 xferlog_file 选项对其进行设定
# 默认值为 NO
xferlog_enable=YES

# Make sure PORT transfer connections originate from port 20 (ftp-data).
# 是否设定 FTP 服务器将启用 FTP 数据端口的连接请求
# ftp-data 数据传输，21 为连接控制端口
connect_from_port_20=YES

# 设定是否允许改变上传文件的属主，与下面一个设定项配合使用
# 注意，不推荐使用 root 用户上传文件
#chown_uploads=YES

# 设置想要改变的上传文件的属主，如果需要，则输入一个系统用户名
# 可以把上传的文件都改成 root 属主。whoever：任何人
#chown_username=whoever

# 设定系统维护记录 FTP 服务器上传和下载情况的日志文件
# /var/log/vsftpd.log 是默认的，也可以另设其它
#xferlog_file=/var/log/vsftpd.log

# 是否以标准 xferlog 的格式书写传输日志文件
# 默认为 /var/log/xferlog，也可以通过 xferlog_file 选项对其进行设定
# 默认值为 NO
#xferlog_std_format=YES

# 以下是附加配置，添加相应的选项将启用相应的设置
# 是否生成两个相似的日志文件
# 默认在 /var/log/xferlog 和 /var/log/vsftpd.log 目录下
# 前者是 wu_ftpd 类型的传输日志，可以利用标准日志工具对其进行分析；后者是 vsftpd 类型的日志
#dual_log_enable

# 是否将原本输出到 /var/log/vsftpd.log 中的日志，输出到系统日志
#syslog_enable

# 设置数据传输中断间隔时间，此语句表示空闲的用户会话中断时间为 600 秒
# 即当数据传输结束后，用户连接 FTP 服务器的时间不应超过 600 秒。可以根据实际情况对该值进行修改
#idle_session_timeout=600

# 设置数据连接超时时间，该语句表示数据连接超时时间为 120 秒，可根据实际情况对其个修改
#data_connection_timeout=120

# 运行 vsftpd 需要的非特权系统用户，缺省是 nobody
#nopriv_user=ftpsecure

# 是否识别异步 ABOR 请求。
# 如果 FTP client 会下达 “async ABOR” 这个指令时，这个设定才需要启用
# 而一般此设定并不安全，所以通常将其取消
#async_abor_enable=YES

# 是否以 ASCII 方式传输数据。默认情况下，服务器会忽略 ASCII 方式的请求。
# 启用此选项将允许服务器以 ASCII 方式传输数据
# 不过，这样可能会导致由 "SIZE /big/file" 方式引起的 DoS 攻击
#ascii_upload_enable=YES
#ascii_download_enable=YES

# 登录 FTP 服务器时显示的欢迎信息
# 如有需要，可在更改目录欢迎信息的目录下创建名为.message 的文件，并写入欢迎信息保存后
#ftpd_banner=Welcome to blah FTP service.

# 黑名单设置。如果很讨厌某些 email address，就可以使用此设定来取消他的登录权限
# 可以将某些特殊的 email address 抵挡住。
#deny_email_enable=YES

# 当上面的 deny_email_enable=YES 时，可以利用这个设定项来规定哪些邮件地址不可登录 vsftpd 服务器
# 此文件需用户自己创建，一行一个 email address 即可
#banned_email_file=/etc/vsftpd/banned_emails

# 用户登录 FTP 服务器后是否具有访问自己目录以外的其他文件的权限
# 设置为 YES 时，用户被锁定在自己的 home 目录中，vsftpd 将在下面 chroot_list_file 选项值的位置寻找 chroot_list 文件
# 必须与下面的设置项配合
#chroot_list_enable=YES

# 被列入此文件的用户，在登录后将不能切换到自己目录以外的其他目录
# 从而有利于 FTP 服务器的安全管理和隐私保护。此文件需自己建立
#chroot_list_file=/etc/vsftpd/chroot_list

# 是否允许递归查询。默认为关闭，以防止远程用户造成过量的 I/O
#ls_recurse_enable=YES

# 是否允许监听。
# 如果设置为 YES，则 vsftpd 将以独立模式运行，由 vsftpd 自己监听和处理 IPv4 端口的连接请求
listen=YES

# 设定是否支持 IPV6。如要同时监听 IPv4 和 IPv6 端口，
# 则必须运行两套 vsftpd，采用两套配置文件
# 同时确保其中有一个监听选项是被注释掉的
#listen_ipv6=YES

# 设置 PAM 外挂模块提供的认证服务所使用的配置文件名，即 /etc/pam.d/vsftpd 文件
# 此文件中 file=/etc/vsftpd/ftpusers 字段，说明了 PAM 模块能抵挡的帐号内容来自文件 /etc/vsftpd/ftpusers 中

#pam_service_name=vsftpd
# 是否允许 ftpusers 文件中的用户登录 FTP 服务器，默认为 NO
# 若此项设为 YES，则 user_list 文件中的用户允许登录 FTP 服务器
# 而如果同时设置了 userlist_deny=YES，则 user_list 文件中的用户将不允许登录 FTP 服务器，甚至连输入密码提示信息都没有
#userlist_enable=YES/NO

# 设置是否阻扯 user_list 文件中的用户登录 FTP 服务器，默认为 YES
#userlist_deny=YES/NO

# 是否使用 tcp_wrappers 作为主机访问控制方式。
# tcp_wrappers 可以实现 linux 系统中网络服务的基于主机地址的访问控制
# 在 /etc 目录中的 hosts.allow 和 hosts.deny 两个文件用于设置 tcp_wrappers 的访问控制
# 前者设置允许访问记录，后者设置拒绝访问记录。
# 如想限制某些主机对 FTP 服务器 192.168.57.2 的匿名访问，编缉 /etc/hosts.allow 文件，如在下面增加两行命令：
# vsftpd:192.168.57.1:DENY 和 vsftpd:192.168.57.9:DENY
# 表明限制 IP 为 192.168.57.1/192.168.57.9 主机访问 IP 为 192.168.57.2 的 FTP 服务器
# 此时 FTP 服务器虽可以 PING 通，但无法连接
tcp_wrappers=YES
```



# firewalld

## firewalld “开放端口” 相关操作教程


### 一. firewalld 基本使用命令

- 启动： systemctl start firewalld
- 查看状态： systemctl status firewalld
- 停止： systemctl disable firewalld
- 禁用： systemctl stop firewalld

### 二. systemctl 是 CentOS 7 的服务管理工具中主要的工具，它融合之前 service 和 chkconfig 的功能于一体。

- 启动一个服务：systemctl start firewalld.service
- 关闭一个服务：systemctlstop firewalld.service
- 重启一个服务：systemctlrestart firewalld.service
- 显示一个服务的状态：systemctlstatus firewalld.service
- 在开机时启用一个服务：systemctlenable firewalld.service
- 在开机时禁用一个服务：systemctldisable firewalld.service
- 查看服务是否开机启动：systemctlis-enabled firewalld.service
- 查看已启动的服务列表：systemctllist-unit-files|grep enabled
- 查看启动失败的服务列表：systemctl--failed



### 三.配置 firewalld-cmd

- 查看版本： firewall-cmd --version
- 查看帮助： firewall-cmd --help
- 显示状态： firewall-cmd --state
- 查看所有打开的端口： firewall-cmd --zone=public --list-ports
- 更新防火墙规则： firewall-cmd --reload
- 查看区域信息: firewall-cmd--get-active-zones
- 查看指定接口所属区域： firewall-cmd--get-zone-of-interface=eth0
- 拒绝所有包：firewall-cmd --panic-on
- 取消拒绝状态： firewall-cmd --panic-off
- 查看是否拒绝： firewall-cmd --query-panic

!> 那么： firewalld 如何开放一个端口呢？

```
## 1.开放 80 端口：

firewall-cmd --zone=public --add-port=80/tcp --permanent （--permanent 永久生效，没有此参数重启后失效）

## 2.重新载入配置
root@localhost:~# firewall-cmd --reload

## 3.查看
root@localhost:~# firewall-cmd --zone=public --query-port=80/tcp

## 4.删除
root@localhost:~# firewall-cmd --zone=public --remove-port=80/tcp --permanent
```


## firewalld 拓展知识：

1.查看 firewall 是否运行？下面两个命令都可以
systemctl status firewalld.service
firewall-cmd --state

2.查看当前开了哪些端口？
其实一个服务对应一个端口，每个服务对应 /usr/lib/firewalld/services 下面一个 xml 文件。
firewall-cmd --list-services

3.查看还有哪些服务可以打开？
firewall-cmd --get-services

4.查看所有打开的端口：
firewall-cmd --zone=public --list-ports

5.更新防火墙规则：
firewall-cmd --reload


## FirewallD 常用的命令：

```
firewall-cmd --state                              ## 查看防火墙状态，是否是 running
systemctl status firewalld.service                       ## 查看防火墙状态
systemctl start firewalld.service                          ## 启动防火墙
systemctl stop firewalld.service                           ## 临时关闭防火墙
systemctl enable firewalld.service                        ## 设置开机启动防火墙
systemctl disable firewalld.service                        ## 设置禁止开机启动防火墙

firewall-cmd --permanent --query-port=80/tcp  ## 查看 80 端口有没开放

firewall-cmd --reload                                      ## 重新载入配置，比如添加规则之后，需要执行此命令

firewall-cmd --get-zones                                ## 列出支持的 zone
firewall-cmd --get-services                             ## 列出预定义的服务
firewall-cmd --query-service ftp                     ## 查看 ftp 服务是否放行，返回 yes 或者 no
firewall-cmd --add-service=ftp                      ## 临时开放 ftp 服务
firewall-cmd --add-service=ftp --permanent          ## 永久开放 ftp 服务
firewall-cmd --remove-service=ftp --permanent    ## 永久移除 ftp 服务
firewall-cmd --add-port=80/tcp --permanent        ## 永久添加 80 端口
firewall-cmd --zone=public --remove-port=80/tcp --permanent     ## 移除 80 端口

iptables -L -n                            ## 查看规则，这个命令是和 iptables 的相同的
man firewall-cmd                               ## 查看帮助

参数含义：
--zone                        #作用域
--permanent             #永久生效，没有此参数重启后失效

```



