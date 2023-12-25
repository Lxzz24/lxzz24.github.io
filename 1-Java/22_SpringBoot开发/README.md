## SpringBoot 开发


我们已经在前面详细介绍了 Spring 框架，它的主要功能包括 IoC 容器、AOP 支持、事务支持、MVC 开发以及强大的第三方集成功能等。

那么，Spring Boot 又是什么？它和 Spring 是什么关系？

Spring Boot 是一个基于 Spring 的套件，它帮我们预组装了 Spring 的一系列组件，以便以尽可能少的代码和配置来开发基于 Spring 的 Java 应用程序。

以汽车为例，如果我们想组装一辆汽车，我们需要发动机、传动、轮胎、底盘、外壳、座椅、内饰等各种部件，然后把它们装配起来。Spring 就相当于提供了一系列这样的部件，但是要装好汽车上路，还需要我们自己动手。而 Spring Boot 则相当于已经帮我们预装好了一辆可以上路的汽车，如果有特殊的要求，例如把发动机从普通款换成涡轮增压款，可以通过修改配置或编写少量代码完成。

因此，Spring Boot 和 Spring 的关系就是整车和零部件的关系，它们不是取代关系，试图跳过 Spring 直接学习 Spring Boot 是不可能的。

Spring Boot 的目标就是提供一个开箱即用的应用程序架构，我们基于 Spring Boot 的预置结构继续开发，省时省力。

本章我们将详细介绍如何使用 Spring Boot。

本教程使用的 Spring Boot 版本是 2.x 版，如果使用 Spring Boot 3.x 则需注意，两者有以下不同：

| | Spring Boot 2.x | Spring Boot 3.x |
| -- | :--: | :--: |
| Spring 版本 | Spring 5.x | Spring 6.x | 
| JDK 版本 | >= 1.8 | >= 17 | 
| Tomcat 版本 | 9.x | 10.x | 
| Annotation 包 | javax.annotation | jakarta.annotation | 
| Servlet 包 | javax.servlet | jakarta.servlet | 
| JMS 包 | javax.jms | jakarta.jms | 
| JavaMail 包 | javax.mail | jakarta.mail | 


如果使用 Spring Boot 的其他版本，则需要根据需要调整代码。



